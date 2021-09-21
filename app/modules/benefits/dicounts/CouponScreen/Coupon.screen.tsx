import React, {memo} from 'react';
import {FlatList} from 'react-native';
import {CategoriesType} from '../../../../services/benefits/benefits.types';
import CouponItem from './couponItem/CouponItem';
import CouponHeader from './couponHeader/CouponHeader';
import useButtonsSwitchAndGetFilteredData from '../../../../hooks/useButtonsSwitchAndGetFilteredData';
import {useRoute} from '@react-navigation/native';

interface ICouponProps {
  // discount: DiscountsDataType;
  categories: CategoriesType[];
}

const CouponScreen = memo(({categories}: ICouponProps): JSX.Element => {
  const {params} = useRoute();
  const {chosenCategory, onBtnPress, filteredCoupons} =
    useButtonsSwitchAndGetFilteredData(params?.coupons);

  return (
    <FlatList
      ListHeaderComponent={() => (
        <CouponHeader
          chosenCategory={chosenCategory}
          onBtnPress={onBtnPress}
          categories={categories}
        />
      )}
      data={filteredCoupons}
      style={{paddingBottom: 14}}
      renderItem={({item, index}) => <CouponItem key={index} coupon={item} />}
    />
  );
});

export default CouponScreen;
