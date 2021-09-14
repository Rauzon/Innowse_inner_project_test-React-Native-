import React, {memo} from 'react';
import {Image, View, Text} from 'react-native';
import s from './newComponent.styles';
import {NewType} from '../../../../services/news/news.types';
import {NEWS_ICON_URL_DATA} from '../../../../constants';

interface INewComponentProps {
  newItem: NewType;
  isFirstItem?: boolean;
}

const NewComponent = memo(
  ({newItem, isFirstItem}: INewComponentProps): JSX.Element => {
    return (
      <View
        style={
          !isFirstItem
            ? [s.wrapper, s.content_wrapper_border]
            : [s.wrapper, {paddingBottom: 14}]
        }>
        <View style={s.icon_wrapper}>
          <Image source={NEWS_ICON_URL_DATA[newItem.icon]} style={s.icon} />
        </View>
        <View style={s.content_wrapper}>
          <Text style={s.title}>{newItem.title}</Text>
          <Text style={s.date}>{newItem.date}</Text>
        </View>
      </View>
    );
  },
);

export default NewComponent;
