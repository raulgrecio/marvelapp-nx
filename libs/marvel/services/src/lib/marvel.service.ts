import { CharacterDataContainer } from '@nxrgr/marvel/models';
import { AxiosResponse } from 'axios';
import { client } from './marvel.client';

import type { MarvelResponse } from './marvel.service.interface';

async function fetchCharacters(
  offset = 0,
  limit = 50
): Promise<CharacterDataContainer> {
  const response: AxiosResponse<MarvelResponse> = await client.get(
    '/characters',
    {
      params: {
        offset,
        limit,
      },
    }
  );

  if (response.status == 200) {
    return response.data.data;
  }

  throw response;
}

async function fetchCharacter(
  charterId: number
): Promise<CharacterDataContainer> {
  const response: AxiosResponse<MarvelResponse> = await client.get(
    `/characters/${charterId}`
  );

  if (response.status == 200) {
    return response.data.data;
  }

  throw response;
}

export const marvelService = { fetchCharacters, fetchCharacter };
