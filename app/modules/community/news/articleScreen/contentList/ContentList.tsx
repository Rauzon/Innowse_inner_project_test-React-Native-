import React, {memo} from 'react';
import {Text, View} from 'react-native';

interface IContentListProps {
  preContent?: string;
  content: Array<{subtitle?: string; text?: string}>;
}

const ContentList = memo(
  ({preContent, content}: IContentListProps): JSX.Element => {
    return (
      <View>
        {preContent ? (
          <View>
            <Text>{preContent}</Text>
          </View>
        ) : (
          <></>
        )}
        {content?.map(({subtitle, text}, index) => {
          return (
            <View key={index}>
              <Text>{subtitle}</Text>
              <Text>{text}</Text>
            </View>
          );
        })}
      </View>
    );
  },
);

export default ContentList;
