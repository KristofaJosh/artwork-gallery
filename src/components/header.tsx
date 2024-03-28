import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';

const links = ['list', 'gallery'];
export const Header = ({ className }: { className?: string }) => {
  return (
    <header>
      <div
        className={cn(
          'container m-auto flex items-center justify-between gap-2 border-b-2 p-8',
          'dark:bg-gray-800 dark:text-white',
          className,
        )}
      >
        <h1 className={'font-bold text-lg'}>Artwork App</h1>
        <nav>
          <ul className={'flex justify-between'}>
            {links.map((link) => (
              <li
                key={link}
                className={'hover:font-bold border-r-2 px-6 capitalize last:border-none last:pr-0'}
              >
                <Link href={`?view=${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
