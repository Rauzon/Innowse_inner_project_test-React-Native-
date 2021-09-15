type WorkTimeType = {start?: string; end?: string};

type CategoriesType = 'все' | 'еда' | 'алкоголь' | 'спорт' | 'красота';

type DiscountMetaDataType = {
  condition?: string | null;
  login?: string | null;
  password?: string | null;
  description?: string | null;
};

type PlaceDataType = {
  address?: string | null;
  phoneNumber?: string | null;
  workTime?: {
    workDays?: WorkTimeType;
    weekend?: WorkTimeType;
  };
  socials: {[key: string]: string | null};
};

export type CouponType = {
  id: string;
  sizeOfDiscount: string;
  placeName: string;
  category: CategoriesType;
  discountMetaData: DiscountMetaDataType;
  placeData: PlaceDataType;
};

export type DiscountsDataType = {
  id: string;
  city: string;
  shortDescription: string | null;
  icon: string;
  coupons: CouponType[];
};

export type DiscountsType = {
  discountsData: DiscountsDataType[];
  categories: CategoriesType[];
};

type ReferralsDataType = {};

export interface IBenefits {
  discounts: DiscountsType;
  referrals: ReferralsDataType;
}
