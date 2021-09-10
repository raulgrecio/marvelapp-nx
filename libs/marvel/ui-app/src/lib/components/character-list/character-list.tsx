import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Character } from '@nxrgr/marvel/models';

import Item from './item';
import Footer from './footer';

export interface CharacterListProps {
  characters?: Character[];
  fetchMore: () => void;
}

export const CharacterList = ({
  characters,
  fetchMore,
}: CharacterListProps) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const height = width * 0.6;

  const renderItem = useCallback(
    ({ item }: { item: Character }) => (
      <Item character={item} height={height} />
    ),
    [height]
  );

  const renderFooter = useCallback(() => <Footer />, []);

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  const getItemLayout = useCallback(
    (_, index) => ({ length: height, offset: height * index, index }),
    [height]
  );

  const keyExtractor = (character: Character) =>
    `character_${character.id}_${Math.random() * 1000}`;

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.notification}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={characters}
        renderItem={renderItem}
        initialNumToRender={5}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={renderSeparator}
        getItemLayout={getItemLayout}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        numColumns={2}
        columnWrapperStyle={{ flex: 1, justifyContent: 'space-evenly' }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  separator: {
    height: 10,
    width: 10,
  },
});
