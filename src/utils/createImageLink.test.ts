import { createImageLink } from './createImageLink';

const defaultIIIFUrl = 'https://www.artic.edu/iiif/2';
const imageId = 'exampleImageId';

describe('createImageLink', () => {
  test('give imageId: returns the correct URL with default parameters', () => {
    const expectedUrl = `${defaultIIIFUrl}/${imageId}/full/840,/0/default.jpg`;
    expect(createImageLink({ image_id: imageId })).toBe(expectedUrl);
  });

  test('given quality: returns the correct URL with a custom quality', () => {
    const quality = 500;
    const expectedUrl = `${defaultIIIFUrl}/${imageId}/full/${quality},/0/default.jpg`;
    expect(createImageLink({ image_id: imageId, quality })).toBe(expectedUrl);
  });

  test('given custom IIIF url: applies a custom IIIF URL correctly', () => {
    const customIIIFUrl = 'https://custom.iiif.server/iiif/2';
    const expectedUrl = `${customIIIFUrl}/${imageId}/full/840,/0/default.jpg`;
    expect(
      createImageLink({ image_id: imageId, iiif_url: customIIIFUrl }),
    ).toBe(expectedUrl);
  });

  test('given all custom params: correctly applies all custom parameters', () => {
    const customIIIFUrl = 'https://custom.iiif.server/iiif/2';
    const quality = 500;
    const expectedUrl = `${customIIIFUrl}/${imageId}/full/${quality},/0/default.jpg`;
    expect(
      createImageLink({ image_id: imageId, quality, iiif_url: customIIIFUrl }),
    ).toBe(expectedUrl);
  });
});
