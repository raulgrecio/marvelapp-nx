import React, { useRef } from 'react';
import { View, StyleSheet, Animated, StatusBar } from 'react-native';
import { Character } from '@nxrgr/marvel/models';
import { useTheme } from '@react-navigation/native';

import { Cover } from './cover';
import { Content } from './content';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export interface CharacterDetailProps {
  character: Character;
}

export function CharacterDetail({ character }: CharacterDetailProps) {
  const y = useRef(new Animated.Value(0)).current; // our animated value
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.notification}
      />
      <Cover character={character} y={y} />
      <Content character={character} y={y} />
    </View>
  );
}
