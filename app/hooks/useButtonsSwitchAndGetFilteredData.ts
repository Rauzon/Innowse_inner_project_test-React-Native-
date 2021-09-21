import {useCallback, useEffect, useState} from 'react';
import {BENEFITS_DISCOUNTS_CATEGORY} from '../constants';
import {CategoriesType, CouponType} from '../services/benefits/benefits.types';
import getFilteredCoupons from '../helpers/getFilteredCoupons';

type UseButtonsSwitchType = {
  chosenCategory: string;
  onBtnPress(value: string): void;
  filteredCoupons: CouponType[];
};

const useButtonsSwitchAndGetFilteredData = (
  couponsData: CouponType[],
): UseButtonsSwitchType => {
  const [chosenCategory, setChosenCategory] = useState<CategoriesType>(
    BENEFITS_DISCOUNTS_CATEGORY.ALL,
  );
  const [filteredCoupons, setFilteredCoupons] = useState<CouponType[]>([]);

  useEffect(() => {
    getFilteredCoupons({couponsData, chosenCategory, setFilteredCoupons});
  }, [chosenCategory, couponsData]);

  const onBtnPress = useCallback((btnContent: CategoriesType) => {
    setChosenCategory(btnContent);
  }, []);
  return {chosenCategory, onBtnPress, filteredCoupons};
};

export default useButtonsSwitchAndGetFilteredData;
