import { CharacterDataContainer } from '@nxrgr/marvel/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus } from '../models/loading-status.enum';

import { initialCharactersState } from './characters-state.initial';
import { CharactersState } from './characters-state.interface';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    requestCharacters() {},
    requestCharactersLoad(state: CharactersState) {
      state.loadingStatus = LoadingStatus.Loading;
    },
    responseCharactersSucceeded(
      state: CharactersState,
      action: PayloadAction<CharacterDataContainer>
    ) {
      state.loadingStatus = LoadingStatus.Success;
      state.count = action.payload.count;
      state.limit = action.payload.limit;
      state.offset = action.payload.offset;
      state.total = action.payload.total;
      state.results = [...(state.results || []), ...action.payload.results];
    },
    responseCharactersFailed(state: CharactersState) {
      state.loadingStatus = LoadingStatus.Error;
    },
  },
});

export const charactersSliceReducer = charactersSlice.reducer;

export const {
  requestCharacters,
  requestCharactersLoad,
  responseCharactersSucceeded,
  responseCharactersFailed,
} = charactersSlice.actions;
