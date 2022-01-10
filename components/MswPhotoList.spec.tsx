import { setupServer } from "msw/node";
import { DefaultRequestBody, PathParams, rest } from "msw";
import { MswPhotoList, Photo } from "./MswPhotoList";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import user from "@testing-library/user-event";

const server = setupServer(
  rest.get<DefaultRequestBody, PathParams, Photo[]>(
    "/api/photos",
    (req, res, ctx) => {
      const name = req.url.searchParams.get("name") || "Unknown";
      return res(
        // ctx.delay(100),
        ctx.json([
          {
            id: 1,
            title: name + ": Hawaii",
            thumbnailUrl: "/photo1.png",
            favourite: true,
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

describe("after application loads data", () => {
  beforeEach(async () => {
    render(<MswPhotoList />);
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  it('renders the photos"', () => {
    const element = screen.getByText("Unknown: Hawaii");
    expect(element).toBeInTheDocument();
  });

  describe("when clicking Refresh button", () => {
    beforeEach(async () => {
      user.type(screen.getByLabelText(/Your Name:/i), "Bruno");
      await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    });

    it('renders the newly loaded data"', () => {
      expect(screen.getByText("Bruno: Hawaii")).toBeInTheDocument();
    });
  });
});
