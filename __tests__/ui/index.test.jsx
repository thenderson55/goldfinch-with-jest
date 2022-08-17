/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../pages/index';

describe('Home', () => {
  // const user: UserEvent = userEvent.setup()
  test('should render the heading', () => {
    render(<Home />);

    const heading = screen.getByText(/thomas henderson/i);
    expect(heading).toBeInTheDocument();

    // const image = screen.findByRole('img', {
    //   name: 'Seamus',
    // });
    // expect(image).toBeInTheDocument();
    // const gridLink = screen.findByRole('link', {
    //   name: 'GRID',
    // });
    // const gridLink = screen.getByText(/grid/i);

    // expect(gridLink).toBeInTheDocument();
    // userEvent.click(gridLink);
    expect(screen.getByText(/grid/i).closest('a')).toHaveAttribute(
      'href',
      '/grid'
    );

    const gridLink = screen.getByRole('link', { name: /grid/i });
    expect(gridLink).toHaveAttribute('href', '/grid');
    const flexLink = screen.getByRole('link', { name: /flex/i });
    expect(flexLink).toHaveAttribute('href', '/flex');
  });
});
