import * as React from 'react';
import { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCharacterSelector,
  getCharacterLoadingStatusSelector,
  LoadingStatus,
  requestCharacter,
} from '@nxrgr/marvel/store';

import { RootStackParamList } from '../../navigator';
import { CharacterDetail, ErrorMessage } from '../../components/';
import LoadingScreen from '../loading-screen/loading-screen';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CharacterDetailScreenProps {}

export function CharacterDetailScreen() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'DetailScreen'>
    >();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailScreen'>>();
  const status = useSelector(getCharacterLoadingStatusSelector);
  const character = useSelector(getCharacterSelector);
  const dispatch = useDispatch();

  const { characterId } = route.params;

  useEffect(() => {
    if (characterId) {
      dispatch(requestCharacter(characterId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterId]);

  if (!characterId) {
    return (
      <ErrorMessage message={'Oops. A character has not been selected.'} />
    );
  }

  if (status === LoadingStatus.Success) {
    if (!character?.results[0]) {
      return <ErrorMessage message={'Oops! No data. Please try again.'} />;
    }

    return <CharacterDetail character={character.results[0]} />;
  }

  if (status === LoadingStatus.Error) {
    return (
      <ErrorMessage message={'Oops! Something went wrong. Please try again.'} />
    );
  }

  //initial and loading
  return <LoadingScreen />;
}

export default CharacterDetailScreen;
