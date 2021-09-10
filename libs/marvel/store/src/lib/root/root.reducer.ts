import { combineReducers } from 'redux';

import { errorSlice } from '../error/error.slice';
import { charactersSliceReducer } from '../characters/characters.slice';
import { characterSliceReducer } from '../character/character.slice';

import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  error: errorSlice.reducer,
  characters: charactersSliceReducer,
  character: characterSliceReducer,
});
