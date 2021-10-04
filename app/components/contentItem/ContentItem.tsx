import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './contentItem.styles';

interface IContentItem {
  subtitle?: string;
  text?: string;
  isFirstItem?: boolean;
}

const ContentItem = memo(
  ({subtitle, text, isFirstItem}: IContentItem): JSX.Element => {
    return (
      <View
        style={
          isFirstItem
            ? [styles.content_wrapper, styles.top_gap]
            : styles.content_wrapper
        }>
        <Text style={styles.content_subtitle}>{subtitle}</Text>
        <Text style={styles.content_text}>{text}</Text>
      </View>
    );
  },
);

export default ContentItem;
