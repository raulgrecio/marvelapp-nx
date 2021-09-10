import * as React from 'react';
import { StyleSheet, Animated, Dimensions, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

import { Character } from '@nxrgr/marvel/models';
import { formatUriMarvel } from '../../utils/formatting_uri_marvel';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 50;

const { height } = Dimensions.get('window');
const φ = (1 + Math.sqrt(5)) / 2;
export const MIN_HEADER_HEIGHT = 64 + STATUSBAR_HEIGHT;
export const MAX_HEADER_HEIGHT = height * (φ - 1);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;
export const MARGIN = 150;

interface CoverProps {
  character: Character;
  y: Animated.Value;
}

export const Cover = ({ character: { thumbnail }, y }: CoverProps) => {
  const uri = formatUriMarvel({
    path: thumbnail.path,
    extension: thumbnail.extension,
    aspectRation: 'portrait',
    size: 'uncanny',
  });

  const scale = y.interpolate({
    inputRange: [-MAX_HEADER_HEIGHT, 0, MAX_HEADER_HEIGHT],
    outputRange: [2, 1.1, 1],
    extrapolateRight: 'clamp',
  });
  const opacity = y.interpolate({
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0, 0.8],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <FastImage style={styles.image} source={{ uri }} />
      <LinearGradient
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0, y: 1 }}
        colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'black',
          opacity,
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT + MARGIN,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
