import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {DiscountsDataType} from '../../../../services/benefits/benefits.types';

interface ICouponProps {
  discount: DiscountsDataType;
}

const CouponScreen = memo(({discount}: ICouponProps): JSX.Element => {
  const {city} = discount;
  return (
    <View>
      <Text>{city}</Text>
    </View>
  );
});

export default CouponScreen;
