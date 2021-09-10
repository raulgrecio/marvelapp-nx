import { CharacterDataContainer } from '@nxrgr/marvel/models';

import { LoadingStatus } from '../models/loading-status.enum';

export interface CharactersState {
  loadingStatus: LoadingStatus;
  count?: CharacterDataContainer['count'];
  limit?: CharacterDataContainer['limit'];
  offset?: CharacterDataContainer['offset'];
  total?: CharacterDataContainer['total'];
  results?: CharacterDataContainer['results'];
}
