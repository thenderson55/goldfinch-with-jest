import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

export type PostType = {
  id: string;
  title: string;
  body: string;
};

function PostList({ posts }: { posts: PostType[] }) {
  return (
    <div>
      <h1>POST LIST</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`}>

            <p>{post.title}</p>

          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
