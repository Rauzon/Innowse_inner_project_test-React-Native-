import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DiscountsDataType} from '../../../../services/benefits/benefits.types';
import s from './couponCardstyles';
import {DISCOUNT_CARDS_ICON_URL_DATA} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

interface ICouponProps {
  item: DiscountsDataType;
}

const CouponCard = memo(({item}: ICouponProps): JSX.Element => {
  const {shortDescription, city, icon} = item;
  const {navigate} = useNavigation();

  const onCardPress = () => {
    navigate(`discounts/${city}`);
  };

  return (
    <TouchableOpacity style={s.wrapper} onPress={onCardPress}>
      <View style={s.content_wrapper}>
        <Text style={s.title}>{city}</Text>
        <Text style={s.description}>{shortDescription}</Text>
      </View>
      <View>
        <Image source={DISCOUNT_CARDS_ICON_URL_DATA[icon]} style={s.img} />
      </View>
    </TouchableOpacity>
  );
});

export default CouponCard;
