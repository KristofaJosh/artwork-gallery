import RenderImage from '@/components/render-image/index';
import { render, screen } from '@testing-library/react';

describe('RenderImage', () => {
  it('give size=list: it renders correctly', () => {
    render(<RenderImage src="/test-image.jpg" size={'list'} alt="test" />);
    expect(screen.getByTestId('render-image')).toHaveClass('h-80 w-auto');
    expect(screen.getByRole('img')).toHaveClass('object-cover');
  });

  it('given size=gallery: it renders correctly', () => {
    render(<RenderImage src="/test-image.jpg" alt="test" size="gallery" />);
    expect(screen.getByTestId('render-image')).toHaveClass('h-80 w-80');
  });
});
