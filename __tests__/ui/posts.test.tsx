import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostList from '../../pages/posts/index';

const list = [
  {
    id: '0',
    title: 'The Wandering Bunnies',
    body: 'blistering world music, supported by a moody water glass orchestra',
  },
  {
    id: '1',
    title: 'Shamrock Pete',
    body: 'fusion americana, featuring a hilarious musical saw',
  },
  {
    id: '2',
    title: 'The Joyous Nun Riot',
    body: 'edgy funk with an improvisational vibe',
  },
];

test('all post show', () => {
  render(<PostList posts={list} />);

  const heading = screen.getByRole('heading', {
    name: /post list/i,
  });
  expect(heading).toBeInTheDocument();

  const itemList = screen.getAllByRole('link');
  expect(itemList).toHaveLength(3);
});
