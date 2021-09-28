import React, {memo} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './contentList.styles';
import ContentItem from '../contentItem/ContentItem';

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
        <FlatList
          data={content}
          renderItem={({item, index}) => {
            return (
              <ContentItem
                key={index}
                subtitle={item.subtitle}
                text={item.text}
              />
            );
          }}
        />
      </View>
    );
  },
);

export default ContentList;
