export const createImageLink = ({
  image_id,
  quality = 840,
  iiif_url = 'https://www.artic.edu/iiif/2',
}: {
  image_id: string;
  quality?: number;
  iiif_url?: string;
}) => `${iiif_url}/${image_id}/full/${quality},/0/default.jpg`;
