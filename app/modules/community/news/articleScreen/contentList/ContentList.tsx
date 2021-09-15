import React, {memo} from 'react';
import {Text, View} from 'react-native';
import s from './contentList.styles';

interface IContentListProps {
  preContent?: string;
  content: Array<{subtitle?: string; text?: string}>;
}

const ContentList = memo(
  ({preContent, content}: IContentListProps): JSX.Element => {
    return (
      <View style={s.container}>
        {preContent ? (
          <View style={s.precontent_wrapper}>
            <Text style={s.content_text}>{preContent}</Text>
          </View>
        ) : (
          <></>
        )}
        {content?.map(({subtitle, text}, index) => {
          return (
            <View key={index} style={s.content_wrapper}>
              <Text style={s.content_subtitle}>{subtitle}</Text>
              <Text style={s.content_text}>{text}</Text>
            </View>
          );
        })}
      </View>
    );
  },
);

export default ContentList;
