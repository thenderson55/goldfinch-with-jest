import { setupServer } from "msw/node";
import { DefaultRequestBody, PathParams, rest } from "msw";
import { Photo } from "./MswPhotoList";

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
