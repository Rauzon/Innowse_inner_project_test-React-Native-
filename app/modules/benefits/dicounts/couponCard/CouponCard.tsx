import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DiscountsDataType} from '../../../../services/benefits/benefits.types';
import styles from './couponCard.styles';
import {DISCOUNT_CARDS_ICON_URL_DATA} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

interface ICouponProps {
  item: DiscountsDataType;
}

const CouponCard = memo(({item}: ICouponProps): JSX.Element => {
  const {shortDescription, city, icon} = item;
  const {navigate} = useNavigation();

  const onCardPress = () => {
    navigate('Discounts', item);
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
