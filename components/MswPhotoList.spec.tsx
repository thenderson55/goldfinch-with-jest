import { setupServer } from 'msw/node';
import { DefaultRequestBody, PathParams, rest } from 'msw';
import { MswPhotoList, Photo } from './MswPhotoList';
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import user from '@testing-library/user-event';

const server = setupServer(
  rest.post<Photo, PathParams, Photo>('/api/favourite', (req, res, ctx) => {
    const photo = req.body;
    return res(
      ctx.delay(200),
      ctx.json({ ...photo, favourite: !photo.favourite })
    );
  }),

  rest.get<DefaultRequestBody, PathParams, Photo[]>(
    '/api/photos',
    (req, res, ctx) => {
      // More than one param will be array
      // const paramsArray = req.url.searchParams.getAll("id") || "Unknown";

      const name = req.url.searchParams.get('name') || 'Unknown';
      return res(
        // ctx.delay(100),
        ctx.json([
          {
            id: 1,
            title: name + ': Hawaii',
            thumbnailUrl: '/photo1.png',
            favourite: true,
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe.skip('after application loads data', () => {
  beforeEach(async () => {
    render(<MswPhotoList />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it('renders the photos"', () => {
    const element = screen.getByText('Unknown: Hawaii');
    expect(element).toBeInTheDocument();
  });

  describe('when clicking Refresh button', () => {
    beforeEach(async () => {
      user.type(screen.getByLabelText(/Your Name:/i), 'Bruno');
      await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });

    it('renders the newly loaded data"', () => {
      expect(screen.getByText('Bruno: Hawaii')).toBeInTheDocument();
    });
  });

  describe('when clicking Refresh button and server returns error', () => {
    beforeEach(async () => {
      server.use(
        rest.get<DefaultRequestBody, { message: string }>(
          '/api/photos',
          (req, res, ctx) => {
            return res(
              ctx.status(500),
              ctx.json({ message: 'Sorry, there has been an issue...' })
            );
          }
        )
      );
      user.click(screen.getByText('Refresh'));
      await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });

    it('renders the error keeping the old data"', () => {
      expect(
        screen.getByText('Sorry, there has been an issue...')
      ).toBeInTheDocument();
    });
  });

  describe('when clicking "Add to Favourites" changes the button text', () => {
    beforeEach(async () => {
      user.click(screen.getByRole('button', { name: 'Add To Favourites' }));
      await waitForElementToBeRemoved(() =>
        screen.getByRole('button', { name: 'Add To Favourites' })
      );
    });

    it('renders "Remove from Favourites"', () => {
      expect(
        screen.getByRole('button', { name: 'Remove from Favourites' })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: 'Add to Favourites' })
      ).not.toBeInTheDocument();
    });
  });
});
