import { setupServer } from "msw/node";
import { DefaultRequestBody, PathParams, rest } from "msw";
import { MswPhotoList, Photo } from "./MswPhotoList";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";

const server = setupServer(
  rest.get<DefaultRequestBody, PathParams, Photo[]>(
    "/api/photos",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            title: "Hawaii",
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
    const element = screen.getByText("Hawaii");
    expect(element).toBeInTheDocument();
  });
});
