import { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextLayoutEvent,
  View,
} from 'react-native';

import { AppText } from './app-text';
import { COLORS } from '@/lib/constants/color.constant';
import { FONTS } from '@/lib/constants/font.constant';

interface Props {
  text: string;
  numberOfLines?: number;
}

export const ReadMoreText = ({
  text,
  numberOfLines = 3,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [visibleText, setVisibleText] = useState(text);
  const [hasMore, setHasMore] = useState(false);

  const [measuring, setMeasuring] = useState(true);
  const [candidate, setCandidate] = useState(text);

  useEffect(() => {
    setExpanded(false);
    setVisibleText(text);
    setHasMore(false);
    setCandidate(text);
    setMeasuring(true);
  }, [text, numberOfLines]);

  /**
   * Measure candidate text + Read More together.
   */
  const handleMeasure = (event: TextLayoutEvent) => {
    const lines = event.nativeEvent.lines;

    if (lines.length <= numberOfLines) {
      // Candidate fits.
      if (candidate.length === text.length) {
        // Entire text fits -> no Read More required.
        setVisibleText(text);
        setHasMore(false);
        setMeasuring(false);
        return;
      }

      setVisibleText(candidate);
      setHasMore(true);
      setMeasuring(false);
      return;
    }

    // Candidate doesn't fit.
    // Remove some characters and measure again.
    const nextLength = Math.max(
      0,
      candidate.length - Math.max(1, Math.floor(candidate.length / 10)),
    );

    if (nextLength === candidate.length) {
      setVisibleText(candidate);
      setHasMore(true);
      setMeasuring(false);
      return;
    }

    setCandidate(candidate.slice(0, nextLength).trim());
  };

  if (measuring) {
    return (
      <View style={styles.container}>
        {/* 
          Hidden measurement text.
          Read More is included here so we know whether
          the combination actually fits on the last line.
        */}
        <AppText
          weight={FONTS.light}
          style={styles.measureText}
          onTextLayout={handleMeasure}
        >
          {candidate}{' '}
          <AppText
            weight={FONTS.semibold}
            style={styles.readMore}
          >
            Read More
          </AppText>
        </AppText>
      </View>
    );
  }

  if (!hasMore) {
    return (
      <View style={styles.container}>
        <AppText
          weight={FONTS.light}
          style={styles.description}
        >
          {text}
        </AppText>
      </View>
    );
  }

  if (expanded) {
    return (
      <View style={styles.container}>
        <AppText
          weight={FONTS.light}
          style={styles.description}
        >
          {text}{' '}
          <AppText
            weight={FONTS.semibold}
            style={styles.readMore}
            onPress={() => setExpanded(false)}
          >
            Read Less
          </AppText>
        </AppText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppText
        weight={FONTS.light}
        style={styles.description}
      >
        {visibleText.trim()}...{' '}
        <AppText
          weight={FONTS.semibold}
          style={styles.readMore}
          onPress={() => setExpanded(true)}
        >
          Read More
        </AppText>
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 8,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.GREY.LIGHT,
  },

  readMore: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.BRWON.NORMAL,
  },

  measureText: {
    position: 'absolute',
    left: 0,
    right: 0,

    opacity: 0,
  },
});