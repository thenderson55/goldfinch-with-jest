import React from 'react';
import { screen } from '@testing-library/react';
import GetUser from '../../components/GetUser/GetUser';
import { renderWithClient } from '../../testUtils';
// import userEvent from '@testing-library/user-event';

test('gets individual user information', async () => {
  renderWithClient(<GetUser />);

  const username = await screen.findByText(/clementine Bauch/i);

  expect(username).toBeInTheDocument();
});
