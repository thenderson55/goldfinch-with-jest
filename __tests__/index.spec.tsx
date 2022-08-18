import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { server } from '../testUtils/setupTests';
import { renderWithClient } from '../testUtils';
import ItemsList from '../pages/items/index';
import { rest } from 'msw';
// import { RouterContext } from "next/dist/shared/lib/router-context";
// import { createMockRouter } from "../../testUtils/createMockRouter";

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementationOnce(() => ({
  query: {},
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  back: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  push: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
}));

describe.skip('after application loads data', () => {
  beforeEach(async () => {
    useRouter.mockImplementationOnce(() => ({
      query: { page: 3, limit: 10 },
    }));
    // renderWithClient(
    //   <RouterContext.Provider
    //     value={createMockRouter({ query: { page: "1", limit: "10" } })}
    //   >
    //     <ItemsList />
    //   </RouterContext.Provider>
    // );
    renderWithClient(<ItemsList />);
    // ?limit=2&page3
    server.use(
      rest.get(`/api/items`, (req, res, ctx) => {
        console.log('URL: ', req.url.toString());
        return res(
          ctx.status(200),
          ctx.json({
            data: [
              {
                _id: 2,
                name: 'Yolo',
                artist: 'Chelsey Dietrich',
              },
            ],
            total: 20,
          })
        );
      })
    );
    server.printHandlers();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it('renders the ItemList', async () => {
    expect(await screen.findByText(/Total pages/i)).toBeInTheDocument();
    expect(await screen.findByText(/Chelsey Dietrich/i)).toBeInTheDocument();
  });
});
