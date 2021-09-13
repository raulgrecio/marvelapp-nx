export type AspectRationUriMarvel = 'standard' | 'landscape' | 'portrait';
export type SizeUriMarvel =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'fantastic'
  | 'amazing'
  | 'incredible'
  | 'uncanny';

export type PortraitSizeUriMarvel = Record<
  'portrait',
  Exclude<SizeUriMarvel, 'large' | 'amazing' | 'uncanny'>
>;

export type StandardSizeUriMarvel = Record<
  'standard',
  Exclude<SizeUriMarvel, 'uncanny' | 'incredible'>
>;

export type LandscapeSizeUriMarvel = Record<
  'landscape',
  Exclude<SizeUriMarvel, 'fantastic' | 'uncanny'>
>;

export type AllSizeUriMarvel = PortraitSizeUriMarvel &
  StandardSizeUriMarvel &
  LandscapeSizeUriMarvel;
