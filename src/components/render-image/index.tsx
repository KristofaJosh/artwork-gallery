'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import fallbackImage from './img.png';

type RenderImageType = {
  src: string;
  alt: string;
  size?: 'gallery' | 'list';
  blurDataURL?: string;
  className?: string;
  imgClassName?: string;
  showFullImageOnHover?: boolean;
};
const RenderImage = ({
  size = 'list',
  src,
  alt,
  blurDataURL,
  className,
  imgClassName,
  showFullImageOnHover = false,
}: RenderImageType) => {
  return (
    <div
      data-testid="render-image"
      className={cn(
        'relative overflow-hidden',
        size === 'list' ? 'h-80 w-auto' : 'h-80 w-80',
        className,
      )}
    >
      <Image
        fill
        src={src}
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          showFullImageOnHover &&
            'transition hover:bg-none hover:object-contain',
          ['list', 'gallery'].includes(size) && 'object-cover',
          imgClassName,
        )}
        style={{
          backgroundImage: `url(${fallbackImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          textIndent: '-9999px', // hack to hide the broken image icon
        }}
      />
    </div>
  );
};

export default RenderImage;
