import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from '../../pages/posts/[postId]';
// import Posts from '../__mocks__/fakeData/posts.json';

test('post shows correct information', () => {
  render(
    <Post
      post={{
        id: '0',
        title: 'The Wandering Bunnies',
        body: 'blistering world music, supported by a moody water glass orchestra',
      }}
    />
  );

  const heading = screen.getByRole('heading', {
    name: '0 The Wandering Bunnies',
  });

  expect(heading).toBeInTheDocument();

  const paragraph = screen.getByText(
    'blistering world music, supported by a moody water glass orchestra'
  );

  expect(paragraph).toBeInTheDocument();
});
