import Loading from '@/app/loading';
import { GalleryView } from '@/components/gallery-view';
import { ListView } from '@/components/list-view';
import { Suspense } from 'react';

export default function Home(props: {
  searchParams: { view: string; page: string };
}) {
  const { searchParams } = props;

  return (
    <div className="h-[100%]">
      <Suspense fallback={<Loading />}>
        {searchParams?.view === 'gallery' ? (
          <GalleryView page={searchParams?.page} />
        ) : (
          <ListView page={searchParams?.page} />
        )}
      </Suspense>
    </div>
  );
}
