'use client';
import { PropagateLoader } from 'react-spinners';
import PostGridCard from './PostGridCard';
import usePosts from '@/hooks/posts';

export default function PostGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <div className='w-full text-center'>
      {isLoading && <PropagateLoader size={8} color='red' />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
