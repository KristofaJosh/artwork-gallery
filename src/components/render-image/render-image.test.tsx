import RenderImage from '@/components/render-image/index';
import { render, screen } from '@testing-library/react';

describe('RenderImage', () => {
  it('applies "list" size classes by default', () => {
    render(<RenderImage src="/test-image.jpg" alt="test" />);
    expect(screen.getByTestId('render-image')).toHaveClass('h-80 w-auto');
    expect(screen.getByRole('img')).toHaveClass('object-cover');
  });

  it('applies "gallery" size classes when size is set to "gallery"', () => {
    render(<RenderImage src="/test-image.jpg" alt="test" size="gallery" />);
    expect(screen.getByTestId('render-image')).toHaveClass('h-80 w-80');
  });
});
