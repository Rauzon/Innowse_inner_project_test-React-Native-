import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {
  CategoriesType,
  CouponType,
  DiscountsDataType,
} from '../../../../services/benefits/benefits.types';
import CouponItem from '../../../../components/CouponItem/CouponItem';
import ButtonsHeader from '../../../../components/ButtonsHeader/ButtonsHeader';
import useButtonsSwitchAndGetFilteredData from '../../../../hooks/useButtonsSwitchAndGetFilteredData';
import {Route, useRoute} from '@react-navigation/native';
import benefitsService from '../../../../services/benefits/benefits.service';
import styles from './couponScreen.styles';
import {ROUTES} from '../../../../constants';

const CouponScreen = (): JSX.Element => {
  const {params} = useRoute<Route<ROUTES.DISCOUNTS, DiscountsDataType>>();
  const {chosenCategory, onBtnPress, filteredCoupons} =
    useButtonsSwitchAndGetFilteredData(params.coupons);
  const [categoriesItems, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const data = benefitsService.getDiscountsState();
    const categories = data.discounts?.categories;
    setCategories(categories);
  }, []);

  const header = () => (
    <ButtonsHeader
      chosenCategory={chosenCategory}
      onBtnPress={onBtnPress}
      categories={categoriesItems}
      isBenefitsScreen={true}
    />
  );

  const renderItem = ({item, index}: ListRenderItemInfo<CouponType>) => (
    <CouponItem key={index} coupon={item} />
  );

  return (
    <FlatList
      ListHeaderComponent={header}
      data={filteredCoupons}
      style={styles.list_container}
      renderItem={renderItem}
    />
  );
};

export default CouponScreen;
