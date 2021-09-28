import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './contentItem.styles';

interface IContentItemProps {
  subtitle?: string;
  text?: string;
}

const ContentItem = memo(({subtitle, text}: IContentItemProps): JSX.Element => {
  return (
    <View style={styles.content_wrapper}>
      <Text style={styles.content_subtitle}>{subtitle}</Text>
      <Text style={styles.content_text}>{text}</Text>
    </View>
  );
});

export default ContentItem;
