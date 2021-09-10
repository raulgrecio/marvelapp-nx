import * as React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { SummaryItem } from '../summary-item/summary-item';

export const Section = ({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.section}>{section}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  section: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 16,
    color: 'rgba(255,255,255,0.86)',
  },
});
