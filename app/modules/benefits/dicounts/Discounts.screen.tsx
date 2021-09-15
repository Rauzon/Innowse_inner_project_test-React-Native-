import React, {memo} from 'react';
import {FlatList} from 'react-native';
import s from './discounts.styles';
import CouponCard from './couponCard/CouponCard';
import useGetBenefitsData from '../../../hooks/useGetBenefitsData';

const DiscountsScreen = memo((): JSX.Element => {
  const data = useGetBenefitsData();

  return data ? (
    <FlatList
      data={data.discountsData}
      renderItem={({item}) => <CouponCard key={item.id} item={item} />}
      style={s.container}
    />
  ) : (
    <></>
  );
});

export default DiscountsScreen;
