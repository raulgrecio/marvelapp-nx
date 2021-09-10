export interface URL {
  type: string;
  url: string;
}

export interface Summary {
  resourceURI: string;
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComicSummary extends Summary {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SeriesSummary extends Summary {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EventSummary extends Summary {}

export interface StorySummary extends Summary {
  type: string;
}

interface ResourceList {
  available: number;
  collectionURI: string;
  returned: number;
}

export interface ComicList extends ResourceList {
  items: ComicSummary[];
}

export interface SeriesList extends ResourceList {
  items: SeriesSummary[];
}

export interface EventList extends ResourceList {
  items: ComicSummary[];
}

export interface StoryList extends ResourceList {
  items: StorySummary[];
}

export interface Image {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Image;
  resourceURI: string;
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
  events: EventList;
  urls: URL[];
}

export interface CharacterDataContainer {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: Character[];
}
