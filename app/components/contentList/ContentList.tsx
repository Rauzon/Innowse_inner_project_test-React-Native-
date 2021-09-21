import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './contentList.styles';

interface IContentListProps {
  preContent?: string;
  content: Array<{subtitle?: string; text?: string}>;
}

const ContentList = memo(
  ({preContent, content}: IContentListProps): JSX.Element => {
    return (
      <View style={styles.container}>
        {preContent ? (
          <View style={styles.precontent_wrapper}>
            <Text style={styles.content_text}>{preContent}</Text>
          </View>
        ) : (
          <></>
        )}
        {content?.map(({subtitle, text}, index) => {
          return (
            <View key={index} style={styles.content_wrapper}>
              <Text style={styles.content_subtitle}>{subtitle}</Text>
              <Text style={styles.content_text}>{text}</Text>
            </View>
          );
        })}
      </View>
    );
  },
);

export default ContentList;
