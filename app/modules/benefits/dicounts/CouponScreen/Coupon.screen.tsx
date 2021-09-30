import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {CategoriesType} from '../../../../services/benefits/benefits.types';
import CouponItem from './couponItem/CouponItem';
import ButtonsHeader from '../../../../components/buttonsHeader/ButtonsHeader';
import useButtonsSwitchAndGetFilteredData from '../../../../hooks/useButtonsSwitchAndGetFilteredData';
import {useRoute} from '@react-navigation/native';
import benefitsService from '../../../../services/benefits/benefits.service';
import styles from './couponScreen.styles';

const CouponScreen = (): JSX.Element => {
  const {params} = useRoute();
  const {chosenCategory, onBtnPress, filteredCoupons} =
    useButtonsSwitchAndGetFilteredData(params?.coupons);
  const [categoriesItems, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const data = benefitsService.getDiscountsState();
    const categories = data.discounts?.categories;
    setCategories(categories);
  }, []);

  return (
    <FlatList
      ListHeaderComponent={() => (
        <ButtonsHeader
          chosenCategory={chosenCategory}
          onBtnPress={onBtnPress}
          categories={categoriesItems}
          isBenefitsScreen={true}
        />
      )}
      data={filteredCoupons}
      style={styles.list_container}
      renderItem={({item, index}) => <CouponItem key={index} coupon={item} />}
    />
  );
};

export default CouponScreen;
