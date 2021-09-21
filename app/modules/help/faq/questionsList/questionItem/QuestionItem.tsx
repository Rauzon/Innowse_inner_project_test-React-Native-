import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './questionItem.styles';
import {FaqType} from '../../../../../services/help/help.types';
import {FAQ_ICONS_URL_DATA} from '../../../../../constants';
import { useNavigation } from "@react-navigation/native";

interface QuestionItemProps {
  questionItem: FaqType;
  isLastItem?: boolean;
}

const QuestionItem = memo(
  ({questionItem, isLastItem}: QuestionItemProps): JSX.Element => {
    const {title, subtitle, icon} = questionItem;
    const {navigate} = useNavigation();

    return (
      <TouchableOpacity
        style={
          isLastItem ? [styles.wrapper, {borderBottomWidth: 0}] : styles.wrapper
        }
        onPress={() => navigate('FAQ', questionItem)}>
        <View style={styles.img_wrapper}>
          <Image style={styles.img} source={FAQ_ICONS_URL_DATA[icon]} />
        </View>
        <View style={styles.content_wrapper}>
          <Text style={styles.content_title}>{title}</Text>
          <Text style={styles.content}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);

export default QuestionItem;
