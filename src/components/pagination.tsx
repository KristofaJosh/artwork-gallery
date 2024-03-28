'use client';

import { cn } from '@/utils/cn';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const navButtonClass =
  'mx-2 px-4 py-2 cursor-pointer disabled:cursor-not-allowed bg-gray-200 rounded-lg disabled:opacity-50';
const Pagination = ({
  next_url,
  current_page,
  total_pages,
}: Pick<Pagination, 'current_page' | 'total_pages' | 'next_url'>) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';
  const view = searchParams.get('view') || 'list';

  const handelNext =
    (page: number = 1) =>
    () => {
      const params = new URLSearchParams(searchParams);
      params.set('page', `${current_page + page}`);
      params.set('view', view);
      router.replace(`${pathname}?${params.toString()}`);
    };

  return (
    <div
      className={
        'absolute bottom-24 left-0 right-0 flex items-center justify-center gap-2'
      }
    >
      <div
        className={cn(
          'mx-auto rounded-2xl bg-white p-4',
          'flex items-center gap-6',
          'shadow-2xl',
        )}
      >
        <button
          className={navButtonClass}
          onClick={handelNext(-1)}
          disabled={page === '1'}
        >
          Prev
        </button>
        <span className={'font-semibold'}>{current_page}</span>
        <span> of </span>
        <span>{total_pages}</span>
        <button
          className={navButtonClass}
          disabled={!next_url || current_page === total_pages}
          onClick={handelNext(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
