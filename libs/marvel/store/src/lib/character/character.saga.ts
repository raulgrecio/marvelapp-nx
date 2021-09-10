import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { marvelService } from '@nxrgr/marvel/services';

import { errorSlice } from '../error/error.slice';
import { RootState } from '../root/root-state.interface';
import {
  requestCharacter,
  requestCharacterLoad,
  responseCharacterSucceeded,
  responseCharacterFailed,
} from './character.slice';

export const getCharacterId = (state: RootState) => state.character.id;

function* fetchCharacterSaga() {
  yield put(requestCharacterLoad());
  const characterId = yield select(getCharacterId);
  try {
    const characters = yield call(marvelService.fetchCharacter, characterId);
    yield put(responseCharacterSucceeded(characters));
  } catch (error) {
    const { errorResponse }: { errorResponse: AxiosResponse } = error;
    yield put(errorSlice.actions.handleError(errorResponse));
    yield put(responseCharacterFailed());
  }
}

export function* watchCharacter() {
  yield all([takeLatest(requestCharacter.type, fetchCharacterSaga)]);
}
