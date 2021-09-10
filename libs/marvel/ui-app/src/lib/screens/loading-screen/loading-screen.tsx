import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

/* eslint-disable-next-line */
export interface LoadingScreenProps {}

export function LoadingScreen() {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ActivityIndicator size={'large'} color={theme.colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
