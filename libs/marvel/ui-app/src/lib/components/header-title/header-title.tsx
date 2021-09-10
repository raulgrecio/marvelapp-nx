import * as React from 'react';

import { View, Image, StyleSheet } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderTitleProps {}

export const HeaderTitle = () => {
  return (
    <View style={styles.container} testID="heading">
      <Image
        source={require('../assets/image/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    resizeMode: 'contain',
    height: 30,
  },
});
