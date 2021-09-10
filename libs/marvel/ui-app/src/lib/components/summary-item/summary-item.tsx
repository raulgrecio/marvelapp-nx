import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Summary } from '@nxrgr/marvel/models';
import { splitCharacterName } from '../../utils/split_character_name';

interface SummaryItemProps {
  summary: Summary;
  index: number;
}

export const SummaryItem = ({ summary, index }: SummaryItemProps) => {
  const { realname, surname, others } = splitCharacterName(summary.name);

  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={[styles.cell, styles.flex]}>
        <View>
          <Text style={styles.name}>
            {realname}
            {others[0]}
          </Text>
          {surname && <Text style={styles.surname}>{surname}</Text>}
        </View>
      </View>
      <View style={styles.cell}>
        <Icon name="more-horizontal" color="rgba(255,255,255,0.72)" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    padding: 16,
    justifyContent: 'center',
  },
  index: {
    color: 'rgba(255,255,255,0.72)',
  },
  name: {
    color: 'white',
  },
  surname: {
    color: 'rgba(255,255,255,0.54)',
  },
});
