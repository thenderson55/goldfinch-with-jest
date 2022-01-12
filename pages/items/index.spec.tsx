import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { server } from "../../testUtils/setupTests";
import { renderWithClient } from "../../testUtils";
import ItemsList from "./index";
import { rest } from "msw";
// import { RouterContext } from "next/dist/shared/lib/router-context";
// import { createMockRouter } from "../../testUtils/createMockRouter";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementationOnce(() => ({
  query: { page: 1, limit: 10 },
  asPath: "/posts",
}));

describe("after application loads data", () => {
  beforeEach(async () => {
    useRouter.mockImplementationOnce(() => ({
      query: { page: 1, limit: 10 },
    }));
    // renderWithClient(
    //   <RouterContext.Provider
    //     value={createMockRouter({ query: { page: "1", limit: "10" } })}
    //   >
    //     <ItemsList />
    //   </RouterContext.Provider>
    // );
    renderWithClient(<ItemsList />);

    server.use(
      rest.get(`/api/items`, (req, res, ctx) => {
        console.log("URL: ", req.url.toString());
        return res(
          ctx.status(200),
          ctx.json({
            data: [
              {
                _id: 2,
                name: "Yolo",
                artist: "Chelsey Dietrich",
              },
            ],
            total: 20,
          })
        );
      })
    );
    server.printHandlers();
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  it("renders the ItemList", async () => {
    expect(await screen.findByText(/Total pages/i)).toBeInTheDocument();
    expect(await screen.findByText(/Chelsey Dietrich/i)).toBeInTheDocument();
  });
});
