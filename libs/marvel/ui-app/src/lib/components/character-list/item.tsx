import * as React from 'react';
import { memo } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import {
  AspectRationUriMarvel,
  Character,
  SizeUriMarvel,
} from '@nxrgr/marvel/models';

import { RootStackParamList } from '../../navigator';
import { formatUriMarvel } from '../../utils/formatting_uri_marvel';
import { splitCharacterName } from '../../utils/split_character_name';

export interface ItemProps {
  character: Character;
  height: number;
  aspectRation?: AspectRationUriMarvel;
  size?: SizeUriMarvel;
}

const Item = memo(
  ({
    character,
    height,
    aspectRation = 'standard',
    size = 'xlarge',
  }: ItemProps) => {
    const { width } = useWindowDimensions();

    const uri = formatUriMarvel({
      path: character.thumbnail.path,
      extension: character.thumbnail.extension,
      aspectRation,
      size,
    });

    const { realname, surname } = splitCharacterName(character.name);

    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailScreen', {
            characterId: character.id,
          })
        }
        activeOpacity={0.8}
      >
        <View
          style={[styles.imageContainer, { height, width: width / 2 - 20 }]}
        >
          <FastImage
            source={{ uri }}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
          <LinearGradient
            style={styles.gradient}
            start={{ x: 0, y: 0.3 }}
            end={{ x: 0, y: 1 }}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.8)']}
          />
          {surname && <Text style={styles.surname}>{surname}</Text>}
          <Text style={styles.name}>{realname}</Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default Item;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    minHeight: 200,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  image: {
    //flex: 1,
    borderRadius: 18,
    backgroundColor: '#474747',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  name: {
    paddingTop: 0,
    fontWeight: '700',
    color: 'white',
  },
  surname: {
    paddingTop: 10,
    fontSize: 12,
    color: 'rgba(255,255,255,0.54)',
  },
  gradient: {
    position: 'absolute',
    height: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
  },
});
