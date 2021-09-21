import {BENEFITS_DISCOUNTS_CATEGORY} from '../../constants';

type WorkTimeType = {start?: string; end?: string};

export type CategoriesType =
  | BENEFITS_DISCOUNTS_CATEGORY.ALL
  | BENEFITS_DISCOUNTS_CATEGORY.FOOD
  | BENEFITS_DISCOUNTS_CATEGORY.DRINK
  | BENEFITS_DISCOUNTS_CATEGORY.SPORT
  | BENEFITS_DISCOUNTS_CATEGORY.BEAUTY;

export type DiscountMetaDataType = {
  condition?: string | null;
  login?: string | null;
  password?: string | null;
  description?: string | null;
};

export type PlaceDataType = {
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

export type VacancyType = {
  id: string;
  vacancy: string;
  salary: string;
  cities: string[];
};

export type RecommendationRuleType = {
  id: string;
  rule: string;
  iconName: string;
};

export type RecommendationSchemaType = {
  id: string;
  bonus: string;
  position: string;
};

export type ContactType = {
  id: string;
  city: string[];
  name: string;
  mail: string;
};

export type ReferralsDataType = {
  vacancies: VacancyType[];
  recommendationRules: RecommendationRuleType[];
  recommendationSchema: RecommendationSchemaType[];
  contacts: ContactType[];
};

export interface IBenefits {
  discounts: DiscountsType;
  referrals: ReferralsDataType;
}
