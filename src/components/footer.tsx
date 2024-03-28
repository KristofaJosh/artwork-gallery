import { cn } from '@/utils/cn';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        'items-center p-8 dark:bg-gray-800 dark:text-white border-t-2',
        className,
      )}
    >
      <p>Chris Josh &copy; 2024</p>
    </footer>
  );
};
