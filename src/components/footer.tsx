import { cn } from '@/utils/cn';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        'items-center border-t-2 p-8 dark:bg-gray-800 dark:text-white',
        className,
      )}
    >
      <p>
        <a href="mailto:christopherjoshua25+work@hotmail.com">Chris Josh</a>{' '}
        &copy; 2024
      </p>
    </footer>
  );
};
