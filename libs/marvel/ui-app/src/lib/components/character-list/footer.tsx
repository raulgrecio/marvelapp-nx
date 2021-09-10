import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {}

export default function Footer() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
