import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DiscountsDataType} from '../../../../services/benefits/benefits.types';
import styles from './couponCard.styles';
import {DISCOUNT_CARDS_ICON_URL_DATA, ROUTES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/appScreenNavigation/navigator.types';
import {useTranslation} from 'react-i18next';

type DiscountsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.DISCOUNTS
>;

interface ICoupon {
  item: DiscountsDataType;
}

const CouponCard = memo(({item}: ICoupon): JSX.Element => {
  const {shortDescription, city, icon} = item;
  const {DISCOUNTS} = ROUTES;
  const {t} = useTranslation();
  const {navigate} = useNavigation<DiscountsScreenProp>();

  const onCardPress = () => {
    navigate({name: DISCOUNTS, params: item});
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onCardPress}>
      <View style={styles.content_wrapper}>
        <Text style={styles.title}>{t(`profileScreen.${city}`)}</Text>
        <Text style={styles.description}>{shortDescription}</Text>
      </View>
      <View>
        <Image source={DISCOUNT_CARDS_ICON_URL_DATA[icon]} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
});

export default CouponCard;
