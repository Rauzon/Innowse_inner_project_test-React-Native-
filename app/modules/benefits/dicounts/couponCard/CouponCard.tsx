import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DiscountsDataType} from '../../../../services/benefits/benefits.types';
import styles from './couponCard.styles';
import {DISCOUNT_CARDS_ICON_URL_DATA, ROUTES} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigator/navigator.types';

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
  const {navigate} = useNavigation<DiscountsScreenProp>();

  const onCardPress = () => {
    navigate({name: DISCOUNTS, params: item});
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onCardPress}>
      <View style={styles.content_wrapper}>
        <Text style={styles.title}>{city}</Text>
        <Text style={styles.description}>{shortDescription}</Text>
      </View>
      <View>
        <Image source={DISCOUNT_CARDS_ICON_URL_DATA[icon]} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
});

export default CouponCard;
