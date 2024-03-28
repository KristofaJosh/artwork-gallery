import Pagination from './pagination';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/current-page'),
  useSearchParams: jest.fn(() => new URLSearchParams('page=1&view=list')),
}));

const paginationFactory = (overrides: Partial<Pagination> = {}) => ({
  current_page: 1,
  total_pages: 5,
  next_url: '/',
  ...overrides,
});

describe('Pagination Component', () => {
  test('renders correctly', () => {
    const pagination = paginationFactory();
    render(<Pagination {...pagination} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('of')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('navigates to the next page when next button is clicked', async () => {
    const replaceMock = jest.fn();
    // @ts-ignore
    useRouter.mockImplementation(() => ({
      replace: replaceMock,
    }));

    const pagination = paginationFactory({
      current_page: 1,
      total_pages: 5,
      next_url: '/next',
    });

    render(<Pagination {...pagination} />);

    const nextButton = screen.getByText('Next');
    await userEvent.click(nextButton);

    expect(replaceMock).toHaveBeenCalledWith('/current-page?page=2&view=list');
  });

  test('disables the prev button on the first page', () => {
    const pagination = paginationFactory({
      current_page: 1,
      total_pages: 5,
      next_url: '/next',
    });
    render(<Pagination {...pagination} />);
    const prevButton = screen.getByText('Prev');
    expect(prevButton).toBeDisabled();
  });

  test('disables the next button when there is no next page', () => {
    const pagination = paginationFactory({ current_page: 5, total_pages: 5 });
    render(<Pagination {...pagination} />);
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });
});
