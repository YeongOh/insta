'use client';

import { GridLoader } from 'react-spinners';
import PostListCard from './PostListCard';
import usePosts from '@/hooks/posts';

export default function PostList() {
  const { posts, isLoading } = usePosts();

  console.log(posts);

  return (
    <section>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridLoader color='red' />
        </div>
      )}

      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
