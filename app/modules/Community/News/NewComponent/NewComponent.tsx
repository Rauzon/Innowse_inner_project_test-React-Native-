import React, {memo} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './newComponent.styles';
import {NewType} from '../../../../services/news/news.types';
import {NEWS_ICON_URL_DATA, ROUTES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/appScreenNavigation/navigator.types';

export type NewsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.NEWS
>;

interface INewComponent {
  newItem: NewType;
  isFirstItem?: boolean;
}

const NewComponent = memo(
  ({newItem, isFirstItem}: INewComponent): JSX.Element => {
    const {title, date, icon} = newItem;
    const {navigate} = useNavigation<NewsScreenProp>();

    const onNewPress = () => {
      navigate({name: ROUTES.NEWS, params: newItem});
    };

    const touchableConditionStyle = isFirstItem
      ? [styles.container, styles.top_gap]
      : styles.container;

    const viewConditionStyle = !isFirstItem
      ? [styles.wrapper, styles.content_wrapper_border]
      : [styles.wrapper, styles.padding_bottom_gap];

    return (
      <TouchableOpacity onPress={onNewPress} style={touchableConditionStyle}>
        <View style={viewConditionStyle}>
          <View style={styles.icon_wrapper}>
            <Image source={NEWS_ICON_URL_DATA[icon]} style={styles.icon} />
          </View>
          <View style={styles.content_wrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

export default NewComponent;
