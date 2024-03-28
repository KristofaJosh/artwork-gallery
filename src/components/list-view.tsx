import Pagination from '@/components/pagination';
import RenderImage from '@/components/render-image';
import { fetchData } from '@/lib/fetchData';
import { createImageLink } from '@/utils/createImageLink';
import Link from 'next/link';

export async function ListView({ page = '1' }: { page?: string }) {
  const response = await fetchData<ArtAPIResponseArtworks>(
    `/artworks?limit=30&page=${page}`,
  );

  return (
    <div className={'container m-auto p-6 pb-36'}>
      <ul
        className={
          'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }
      >
        {response.data.map(({ id, title, thumbnail, image_id }) => (
          <li
            key={id}
            className={
              'cursor-pointer rounded bg-white p-4 text-gray-800 shadow-xl hover:shadow-2xl dark:bg-gray-800 dark:text-white'
            }
          >
            <Link href={`/artwork/${id}`}>
              <RenderImage
                className={''}
                src={createImageLink({ image_id, quality: 600 })}
                blurDataURL={thumbnail?.lqip}
                alt={thumbnail?.alt_text}
              />
              <p className={'pt-4 text-lg font-semibold'}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className={'m-6'}>
        <Pagination {...response.pagination} />
      </div>
    </div>
  );
}
