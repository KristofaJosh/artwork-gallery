import Pagination from '@/components/pagination';
import RenderImage from '@/components/render-image';
import { fetchData } from '@/lib/fetchData';
import { cn } from '@/utils/cn';
import { createImageLink } from '@/utils/createImageLink';

export async function GalleryView({ page = '1' }: { page?: string }) {
  const response = await fetchData<ArtAPIResponseArtworks>(
    `/artworks?limit=1&page=${page}`,
  );
  const _responseData = response.data[0];

  const blurImage = createImageLink({
    image_id: _responseData.image_id,
    quality: 20,
  });

  return (
    <div className={'flex h-[100%] w-full items-center justify-center'}>
      <div
        className={
          'flex flex-col items-center justify-center gap-6 lg:flex-row'
        }
      >
        <div
          style={{ backgroundImage: `url(${blurImage})` }}
          className={cn(
            'flex items-center justify-center rounded-lg bg-cover bg-center',
            'h-[300px] w-[300px] bg-no-repeat md:h-[400px] md:w-[400px]',
            'bg-opacity-75',
          )}
        >
          <RenderImage
            className={
              'h-[250px] w-[250px] rounded-lg bg-no-repeat md:h-[300px] md:w-[300px]'
            }
            size={'gallery'}
            src={createImageLink({
              image_id: _responseData.image_id,
              quality: 900,
            })}
            blurDataURL={blurImage || _responseData.thumbnail.lqip}
            alt={_responseData.thumbnail?.alt_text}
          />
          <Pagination {...response.pagination} />
        </div>
        <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />
        <div>
          <p className={'text-center font-semibold capitalize'}>
            {_responseData.title}
          </p>
        </div>
      </div>
    </div>
  );
}
