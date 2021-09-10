import { CharacterDataContainer } from '@nxrgr/marvel/models';
import { createSelector } from '@reduxjs/toolkit';

import { LoadingStatus } from '../models/loading-status.enum';
import { RootState } from '../root/root-state.interface';

const getCharacter = (
  rootState: RootState
): CharacterDataContainer | undefined => rootState.character.character;

const getCharacterLoadingStatus = (rootState: RootState): LoadingStatus =>
  rootState.character.loadingStatus;

export const getCharacterSelector = createSelector(
  getCharacter,
  (character) => character
);

export const getCharacterLoadingStatusSelector = createSelector(
  getCharacterLoadingStatus,
  (loadingStatus) => loadingStatus
);
