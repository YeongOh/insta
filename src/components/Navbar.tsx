'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './Avatar';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];
export default function Navbar() {
  const path = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className='mx-auto flex justify-between items-center p-6'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>Instantgram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center'>
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{href === path ? clickedIcon : icon}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size='small' highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text='Sign Out' onClick={() => signOut()} />
            ) : (
              <ColorButton text='Sign In' onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
