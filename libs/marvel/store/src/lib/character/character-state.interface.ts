import { CharacterDataContainer } from '@nxrgr/marvel/models';

import { LoadingStatus } from '../models/loading-status.enum';

export interface CharacterState {
  loadingStatus: LoadingStatus;
  id?: number;
  character?: CharacterDataContainer;
}
