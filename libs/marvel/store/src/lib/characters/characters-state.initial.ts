import { LoadingStatus } from '../models/loading-status.enum';

import { CharactersState } from './characters-state.interface';

export const initialCharactersState: CharactersState = {
  loadingStatus: LoadingStatus.Initial,
};
