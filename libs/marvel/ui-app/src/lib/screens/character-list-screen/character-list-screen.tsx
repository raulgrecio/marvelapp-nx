import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCharactersSelector,
  getCharactersLoadingStatusSelector,
  LoadingStatus,
  requestCharacters,
} from '@nxrgr/marvel/store';

import { CharacterList } from '../../components';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorMessage from '../../components/error-message/error-message';

/* eslint-disable-next-line */
export interface CharacterListScreenProps {}

export function CharacterListScreen() {
  const status = useSelector(getCharactersLoadingStatusSelector);
  const characters = useSelector(getCharactersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMore = useCallback(() => {
    dispatch(requestCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === LoadingStatus.Success || status === LoadingStatus.Loading) {
    return <CharacterList characters={characters} fetchMore={fetchMore} />;
  }

  if (status === LoadingStatus.Error) {
    return (
      <ErrorMessage message={'Oops! Something went wrong. Please try again.'} />
    );
  }

  //LoadingStatus.Initial
  return <LoadingScreen />;
}

export default CharacterListScreen;
