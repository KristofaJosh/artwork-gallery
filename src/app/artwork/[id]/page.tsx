import { Description } from './components/description';
import RenderImage from '@/components/render-image';
import { fetchData } from '@/lib/fetchData';
import { cn } from '@/utils/cn';
import { createImageLink } from '@/utils/createImageLink';
import { clsx } from 'clsx';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link';

const ColorCard = ({
  color,
  showPercentage,
}: {
  color: Color;
  showPercentage?: boolean;
}) => {
  const composeColor = clsx(
    `${color.h}deg ${color.s}% ${color.l}%`,
    showPercentage && `/${color.percentage}`,
  );
  return (
    <div
      style={{
        backgroundColor: `hsl(${composeColor})`,
        width: 50,
        height: 50,
        border: '1px solid black',
      }}
    />
  );
};
export default async function ImageInfo({ params }: { params: Params }) {
  const { data } = await fetchData<ArtAPIResponseArtwork>(
    `/artworks/${params.id}`,
  );

  console.log(JSON.stringify(data.alt_image_ids, null, 2));

  return (
    <div className={'container m-auto p-6 pb-10'}>
      <div className={'mb-6'}>
        <Link href={'/'} className={'rounded bg-gray-100 p-2'}>
          Back
        </Link>
      </div>
      <div className={cn('flex flex-col gap-6', 'md:flex-row', 'grid gap-10')}>
        <div className={'h-96 w-full w-min min-w-[300px] border'}>
          <RenderImage
            showFullImageOnHover
            size={'gallery'}
            className={'m-8'}
            src={createImageLink({
              image_id: data.image_id,
              quality: 1000,
            })}
            blurDataURL={data?.thumbnail?.lqip}
            alt={data.thumbnail?.alt_text}
          />
          <p>
            <i className={'text-xs text-gray-400'}>{data.dimensions}</i>
          </p>
        </div>
        <div className={'mb:pt-0 mb-4 pt-4'}>
          <p className={'mb-4 text-lg font-semibold'}>{data.title} </p>
          <Description description={data.description} />
          <small>{data.copyright_notice}</small>
        </div>
      </div>
      <div className={'flex flex-col gap-6'}>
        {data.alt_image_ids.length ? (
          <div>
            <p className={'mb-2 font-bold'}>Alt Images</p>
            <div className={'flex gap-2'}>
              {data.alt_image_ids.map((image_id) => (
                <RenderImage
                  showFullImageOnHover
                  className={'h-[200px] w-[200px] border'}
                  src={createImageLink({
                    image_id: image_id,
                    quality: 500,
                  })}
                  alt={data.thumbnail?.alt_text}
                />
              ))}
            </div>
          </div>
        ) : null}
        <div>
          <p className={'mb-2 font-bold'}>Credit Line</p>
          <p>{data.credit_line}</p>
        </div>
        <div>
          <p className={'mb-2 font-bold'}>Colors</p>
          <div className={'flex gap-2'}>
            <ColorCard color={data.color} />
            <ColorCard color={data.color} showPercentage />
          </div>
        </div>
        {data?.exhibition_history && (
          <div>
            <p className={'mb-2 font-bold'}>Exhibition History</p>
            <p className={'text-sm italic'}>{data?.exhibition_history}</p>
          </div>
        )}
      </div>
    </div>
  );
}
