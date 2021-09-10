import { AspectRationUriMarvel, SizeUriMarvel } from '@nxrgr/marvel/models';

export const formatUriMarvel = ({
  path,
  extension,
  aspectRation = 'landscape',
  size = 'large',
}: {
  path: string;
  extension: string;
  aspectRation?: AspectRationUriMarvel;
  size?: SizeUriMarvel;
}) => {
  const uri = `${path}${aspectRation ? '/'.concat(aspectRation) : ''}${
    size ? '_'.concat(size) : ''
  }.${extension}`;
  return uri;
};
