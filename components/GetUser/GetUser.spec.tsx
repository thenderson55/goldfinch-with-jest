import { screen } from '@testing-library/react';
import { server } from '../../testUtils/setupTests';
import { renderWithClient } from '../../testUtils';
import GetUser from './GetUser';
import { rest } from 'msw';

it.skip('fetches the user and displayes their name', async () => {
  server.use(
    rest.get(
      'https://jsonplaceholder.typicode.com/users/*',
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            name: 'Chelsey Dietrich',
          })
        );
      }
    )
  );

  renderWithClient(<GetUser />);
  expect(await screen.findByText('Chelsey Dietrich')).toBeInTheDocument();
});

it.skip('if the user fetch fails, show the error message', async () => {
  server.use(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  renderWithClient(<GetUser />);

  expect(
    await screen.findByText(/Could not fetch user.../i)
  ).toBeInTheDocument();
});
