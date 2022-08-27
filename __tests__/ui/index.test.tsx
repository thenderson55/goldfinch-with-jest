/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../pages/index';

describe('Home page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Home />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  // const user: UserEvent = userEvent.setup()
  test('should render the heading', () => {
    const heading = screen.getByText(/thomas henderson/i);
    expect(heading).toBeInTheDocument();

    // const image = screen.findByRole('img', {
    //   name: 'Seamus',
    // });
    // expect(image).toBeInTheDocument();
  });

  test('should render the the css and nect.js links', () => {
    const gridLink = screen.getByRole('link', { name: /grid/i });
    expect(gridLink).toHaveAttribute('href', '/grid');

    const flexLink = screen.getByRole('link', { name: /flex/i });
    expect(flexLink).toHaveAttribute('href', '/flex');

    const nextLinkOne = screen.getByRole('link', { name: /items/i });
    expect(nextLinkOne).toHaveAttribute('href', '/items');

    const nextLinkTwo = screen.getByRole('link', { name: /shipwrecks/i });
    expect(nextLinkTwo).toHaveAttribute('href', '/shipwrecks');
  });
});
