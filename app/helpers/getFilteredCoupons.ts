import {BENEFITS_DISCOUNTS_CATEGORY} from '../constants';
import {CouponType} from '../services/benefits/benefits.types';

type FilteredCouponsType = {
  couponsData: CouponType[];
  chosenCategory: string;
  setFilteredCoupons: (value: CouponType[]) => void;
};

const getFilteredCoupons = ({
  couponsData,
  chosenCategory,
  setFilteredCoupons,
}: FilteredCouponsType) => {
  if (couponsData && chosenCategory !== BENEFITS_DISCOUNTS_CATEGORY.ALL) {
    const filteredData = couponsData.filter(coupon => {
      return coupon.category === chosenCategory;
    });
    setFilteredCoupons(filteredData);
  } else if (
    couponsData &&
    chosenCategory === BENEFITS_DISCOUNTS_CATEGORY.ALL
  ) {
    setFilteredCoupons(couponsData);
  } else {
    setFilteredCoupons([]);
  }
};

export default getFilteredCoupons;
