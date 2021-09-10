import { Character /*CharacterDataContainer*/ } from '@nxrgr/marvel/models';
import { createSelector } from '@reduxjs/toolkit';

import { LoadingStatus } from '../models/loading-status.enum';
import { RootState } from '../root/root-state.interface';

const getCharacters = (rootState: RootState): Character[] | undefined =>
  rootState.characters.results;

const getCharactersLoadingStatus = (rootState: RootState): LoadingStatus =>
  rootState.characters.loadingStatus;

export const getCharactersSelector = createSelector(
  getCharacters,
  (results) => results
  // (results) => {
  //   if (!characters) return characters;

  //   const newResults = characters.results.filter(
  //     (element) => !element.thumbnail.path.endsWith('image_not_available')
  //   );

  //   const newCharacters: CharacterDataContainer = {
  //     ...characters,
  //     count: newResults.length,
  //     results: newResults,
  //   };

  //   return newCharacters;
  // }
);

export const getCharactersLoadingStatusSelector = createSelector(
  getCharactersLoadingStatus,
  (loadingStatus) => loadingStatus
);
