import { AxiosResponse } from 'axios';
import { CharacterDataContainer } from '@nxrgr/marvel/models';

export interface MarvelResponse extends AxiosResponse {
  data: CharacterDataContainer;
  etag: string;
}
