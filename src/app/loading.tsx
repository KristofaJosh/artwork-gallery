import { cn } from '@/utils/cn';

const Loading = () => {
  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 right-0 top-0 z-10 w-full bg-black/30',
        'flex items-center justify-center',
      )}
    >
      <p className={'text-3xl text-white'}>Loading</p>
    </div>
  );
};

export default Loading;
