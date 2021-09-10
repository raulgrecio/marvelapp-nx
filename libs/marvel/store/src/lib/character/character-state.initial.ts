import { LoadingStatus } from '../models/loading-status.enum';

import { CharacterState } from './character-state.interface';

export const initialCharacterState: CharacterState = {
  loadingStatus: LoadingStatus.Initial,
};
