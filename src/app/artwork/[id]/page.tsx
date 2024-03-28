import RenderImage from '@/components/render-image';
import { fetchData } from '@/lib/fetchData';
import { cn } from '@/utils/cn';
import { createImageLink } from '@/utils/createImageLink';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from "next/link";

export default async function ImageInfo({ params }: { params: Params }) {
  const { data } = await fetchData<ArtAPIResponseArtwork>(
    `/artworks/${params.id}`,
  );

  return (
    <div className={'container m-auto p-6 pb-10'}>
      <div className={"mb-6"}>
        <Link href={'/'} className={'rounded bg-gray-100 p-2'}>Back</Link>
      </div>
      <div className={cn('flex flex-col gap-6', 'md:flex-row', '')}>
        <div className={'h-96 w-full max-w-[500px] border'}>
          <RenderImage
            className={'m-8'}
            imgClassName={'object-contain'}
            src={createImageLink({
              image_id: data.image_id,
              quality: 1000,
            })}
            blurDataURL={data.thumbnail.lqip}
            alt={data.thumbnail?.alt_text}
          />
        </div>
        <div className={'pt-4'}>
          <p className={'text-lg font-semibold'}>{data.title}</p>
          <p>{data.description || 'No description for this image'}</p>
          <small>{data.copyright_notice}</small>
        </div>
      </div>
    </div>
  );
}
