import * as React from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

import { Character } from '@nxrgr/marvel/models';

//import Header from './Header';
import { splitCharacterName } from '../../utils/split_character_name';
import { SummaryItem } from '../summary-item/summary-item';
import { Section } from '../section/section';
import { MARGIN, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from './cover';

interface ContentProps {
  character: Character;
  y: Animated.Value;
}

export const Content = ({
  character: { name, description, comics, series, stories, events, urls },
  y,
}: ContentProps) => {
  const opacity = y.interpolate({
    inputRange: [
      -MAX_HEADER_HEIGHT / 2,
      0,
      MAX_HEADER_HEIGHT / 2 - MIN_HEADER_HEIGHT,
      MAX_HEADER_HEIGHT / 2,
    ],
    outputRange: [0, 1, 1, 0],
    extrapolate: 'clamp',
  });

  const opacityDescription = y.interpolate({
    inputRange: [-MAX_HEADER_HEIGHT, 0, MIN_HEADER_HEIGHT],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const translateXDescription = y.interpolate({
    inputRange: [-MAX_HEADER_HEIGHT, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 0, -800],
    extrapolate: 'clamp',
  });

  const { realname, surname } = splitCharacterName(name);

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y } } }],
        { useNativeDriver: true } // use native driver for animation
      )}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      //stickyHeaderIndices={[1]}
    >
      <View style={styles.cover}>
        <View style={styles.characterContainer}>
          {description !== '' && (
            <View>
              <Animated.View
                style={[
                  styles.descriptionContainer,
                  { transform: [{ translateX: translateXDescription }] },
                ]}
              >
                <Animated.Text
                  style={[styles.description, { opacity: opacityDescription }]}
                >
                  {description}
                </Animated.Text>
              </Animated.View>
            </View>
          )}
          {surname && (
            <Animated.Text style={[styles.surname, { opacity }]}>
              {surname}
            </Animated.Text>
          )}
          <Animated.Text style={[styles.name, { opacity }]}>
            {realname}
          </Animated.Text>
        </View>
      </View>
      {/*<View style={styles.header}>
        <Header {...{ y, name }} />
      </View> */}

      {/* Comics */}
      {comics.items.length > 0 && (
        <Section section={'Comic'}>
          {comics.items.map((item, index) => (
            <SummaryItem
              key={`comic_${item.name}_${index}`}
              summary={item}
              index={index}
            />
          ))}
        </Section>
      )}

      {/* Series */}
      {series.items.length > 0 && (
        <Section section={'Series'}>
          {series.items.map((item, index) => (
            <SummaryItem
              key={`series_${item.name}_${index}`}
              summary={item}
              index={index}
            />
          ))}
        </Section>
      )}

      {/* Events */}
      {events.items.length > 0 && (
        <Section section={'Events'}>
          {events.items.map((item, index) => (
            <SummaryItem
              key={`event_${item.name}_${index}`}
              summary={item}
              index={index}
            />
          ))}
        </Section>
      )}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    height: MAX_HEADER_HEIGHT + MARGIN,
  },
  characterContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  name: {
    textAlign: 'left',
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  surname: {
    textAlign: 'left',
    color: 'rgba(255,255,255,0.86)',
    fontSize: 24,
  },
  descriptionContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 20,
  },
  description: {
    textAlign: 'justify',
    color: 'rgba(255,255,255,0.54)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  header: {},
});
