import { all, fork } from 'redux-saga/effects';

import { watchCharacters } from '../characters/characters.saga';
import { watchCharacter } from '../character/character.saga';

function* rootSaga() {
  yield all([fork(watchCharacters), fork(watchCharacter)]);
}

export default rootSaga;
