'use client';

import { cn } from '@/utils/cn';
import { useState } from 'react';

export const Description = ({ description }: Pick<Artwork, 'description'>) => {
  const [show, setShow] = useState(false);

  return (
    <div className={'mb-4'}>
      <div
        aria-hidden={!show}
        id={'description'}
        className={cn('description flex hidden flex-col gap-2', show && 'block')}
        dangerouslySetInnerHTML={{
          __html: description || <p>No description for this image</p>,
        }}
      />
      {description ? (
        <button
          aria-describedby={'description'}
          className={'rounded bg-gray-400 p-1 text-xs font-bold'}
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide' : 'Show'} Description
        </button>
      ) : (
        <p>No description for this image</p>
      )}
    </div>
  );
};
