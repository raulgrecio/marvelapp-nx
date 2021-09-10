import { CharacterDataContainer } from '@nxrgr/marvel/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus } from '../models/loading-status.enum';

import { initialCharacterState } from './character-state.initial';
import { CharacterState } from './character-state.interface';

const characterSlice = createSlice({
  name: 'character',
  initialState: initialCharacterState,
  reducers: {
    requestCharacter(state: CharacterState, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    requestCharacterLoad(state: CharacterState) {
      state.loadingStatus = LoadingStatus.Loading;
      state.character = undefined;
    },
    responseCharacterSucceeded(
      state: CharacterState,
      action: PayloadAction<CharacterDataContainer>
    ) {
      state.loadingStatus = LoadingStatus.Success;
      state.character = action.payload;
    },
    responseCharacterFailed(state: CharacterState) {
      state.loadingStatus = LoadingStatus.Error;
    },
  },
});

export const characterSliceReducer = characterSlice.reducer;

export const {
  requestCharacter,
  requestCharacterLoad,
  responseCharacterSucceeded,
  responseCharacterFailed,
} = characterSlice.actions;
