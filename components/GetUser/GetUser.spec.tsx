import { screen } from "@testing-library/react";
import { server } from "../../setupTests";
import { renderWithClient } from "../../testUtils";
import GetUser from "./GetUser";
import { rest } from "msw";

it("fetches the user and displayes their name", async () => {
  server.use(
    rest.get(
      "https://jsonplaceholder.typicode.com/users/*",
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            name: "Chelsey Dietrich",
          })
        );
      }
    )
  );

  renderWithClient(<GetUser />);
  expect(await screen.findByText("Chelsey Dietrich")).toBeInTheDocument();
});

it("if the user fetch fails, show the error message", async () => {
  server.use(
    rest.get("*", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  renderWithClient(<GetUser />);

  expect(
    await screen.findByText(/Could not fetch user.../i)
  ).toBeInTheDocument();
});
