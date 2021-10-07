import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './questionItem.styles';
import {FaqType} from '../../services/help/help.types';
import {FAQ_ICONS_URL_DATA, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigator/navigator.types';
import {useTranslation} from 'react-i18next';

type FAQScreenProp = NativeStackNavigationProp<RootStackParamList, ROUTES.FAQ>;

interface QuestionItem {
  questionItem: FaqType;
  isLastItem?: boolean;
  index: number;
}

const QuestionItem = memo(
  ({questionItem, isLastItem, index}: QuestionItem): JSX.Element => {
    const {t} = useTranslation();
    const {title, icon} = questionItem;
    const {navigate} = useNavigation<FAQScreenProp>();

    const conditionTouchableStyle = isLastItem
      ? [styles.wrapper, styles.without_bottom_border]
      : styles.wrapper;

    const onPressHandler = () =>
      navigate({name: ROUTES.FAQ, params: questionItem});

    return (
      <TouchableOpacity
        style={conditionTouchableStyle}
        onPress={onPressHandler}>
        <View style={styles.img_wrapper}>
          <Image style={styles.img} source={FAQ_ICONS_URL_DATA[icon]} />
        </View>
        <View style={styles.content_wrapper}>
          <Text style={styles.content_title}>
            {t(`profileScreen.${title}`)}
          </Text>
          <Text style={styles.content}>
            {t(`faqScreen.subtitle_${index + 1}`)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
);

export default QuestionItem;
