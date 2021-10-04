import React, {memo} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './newComponent.styles';
import {NewType} from '../../../../services/news/news.types';
import {NEWS_ICON_URL_DATA, ROUTES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigator/navigator.types';

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
    const {navigate} = useNavigation<NewsScreenProp>();

    const onNewPress = () => {
      navigate({name: ROUTES.NEWS, params: newItem});
    };

    return (
      <TouchableOpacity
        key={newItem.id}
        onPress={onNewPress}
        style={
          isFirstItem ? [styles.container, {marginTop: 8}] : styles.container
        }>
        <View
          style={
            !isFirstItem
              ? [styles.wrapper, styles.content_wrapper_border]
              : [styles.wrapper, {paddingBottom: 14}]
          }>
          <View style={styles.icon_wrapper}>
            <Image
              source={NEWS_ICON_URL_DATA[newItem.icon]}
              style={styles.icon}
            />
          </View>
          <View style={styles.content_wrapper}>
            <Text style={styles.title}>{newItem.title}</Text>
            <Text style={styles.date}>{newItem.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

export default NewComponent;
