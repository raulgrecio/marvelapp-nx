import { call, put, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { marvelService } from '@nxrgr/marvel/services';

import { errorSlice } from '../error/error.slice';
import { RootState } from '../root/root-state.interface';
import {
  requestCharacters,
  requestCharactersLoad,
  responseCharactersSucceeded,
  responseCharactersFailed,
} from './characters.slice';

export const getOffset = (state: RootState) => state.characters.offset ?? 0;
export const getTotal = (state: RootState) => state.characters.total ?? 0;
export const getCount = (state: RootState) => state.characters.count ?? 0;
export const getLimit = (state: RootState) => state.characters.limit ?? 10;

function* fetchCharactersSaga() {
  yield put(requestCharactersLoad());

  const offset = yield select(getOffset);
  const total = yield select(getTotal);
  const count = yield select(getCount);
  const limit = yield select(getLimit);

  try {
    if (total === 0 || total > offset + count) {
      const characters = yield call(
        marvelService.fetchCharacters,
        offset + count,
        limit
      );
      yield put(responseCharactersSucceeded(characters));
    }
  } catch (error) {
    const { errorResponse }: { errorResponse: AxiosResponse } = error;
    yield put(errorSlice.actions.handleError(errorResponse));
    yield put(responseCharactersFailed());
  }
}

export function* watchCharacters() {
  yield takeLatest(requestCharacters.type, fetchCharactersSaga);
}
