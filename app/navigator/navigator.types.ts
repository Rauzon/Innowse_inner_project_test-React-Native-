import {ROUTES} from '../constants';
import {NewType} from '../services/news/news.types';
import {DiscountsDataType} from '../services/benefits/benefits.types';
import {FaqType} from '../services/help/help.types';

const {
  RULES,
  FOOD_MESSAGE,
  FAQ,
  APP,
  NOTIFICATION,
  NEWS,
  LOGIN,
  PROFILE,
  DISCOUNTS,
  ERROR_SCREEN,
  SPLASH,
} = ROUTES;

export type RootStackParamList = {
  [SPLASH]: undefined;
  [LOGIN]: undefined;
  [RULES]: undefined;
  [APP]: undefined;
  [ERROR_SCREEN]: undefined;
  [PROFILE]: undefined;
  [NEWS]: NewType;
  [DISCOUNTS]: DiscountsDataType;
  [FAQ]: FaqType;
  [NOTIFICATION]: undefined;
  [FOOD_MESSAGE]: undefined;
};

export type RoutesType =
  | ROUTES.RULES
  | ROUTES.FOOD_MESSAGE
  | ROUTES.FAQ
  | ROUTES.APP
  | ROUTES.NOTIFICATION
  | ROUTES.NEWS
  | ROUTES.LOGIN
  | ROUTES.PROFILE
  | ROUTES.DISCOUNTS
  | ROUTES.ERROR_SCREEN
  | ROUTES.SPLASH;
