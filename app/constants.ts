import {ImageSourcePropType} from 'react-native';

export const WEB_CLIENT_ID =
  '854840053829-2aah1jnelqu0785pcsma05rpdprmt7rh.apps.googleusercontent.com';

export const RULES_ICON_URL_DATA: {[key: string]: ImageSourcePropType} = {
  firstIcon: require('./assets/img/rule_icon_1.png'),
  secondIcon: require('./assets/img/rule_icon_2.png'),
};

export const VIDEOS_ICON_URL_DATA: {[key: string]: ImageSourcePropType} = {
  play_small_icon: require('./assets/img/play_icon_small.png'),
  play_huge_icon: require('./assets/img/play_icon.png'),
};

export const NEWS_ICON_URL_DATA: {[key: string]: ImageSourcePropType} = {
  first_new: require('./assets/img/first_new.png'),
  second_new: require('./assets/img/second_new.png'),
  third_new: require('./assets/img/third_new.png'),
  fourth_new: require('./assets/img/fourth_new.png'),
  fifth_new: require('./assets/img/fifth_new.png'),
  sixth_new: require('./assets/img/sixth_new.png'),
};

export const DISCOUNT_CARDS_ICON_URL_DATA: {
  [key: string]: ImageSourcePropType;
} = {
  minsk_card: require('./assets/img/minsk_card.png'),
  vitebsk_card: require('./assets/img/vitebsk_card.png'),
  gomel_card: require('./assets/img/gomel_card.png'),
  mogilev_card: require('./assets/img/mogilev_card.png'),
};

export const REFERRALS_ICONS_URL_DATA: {[key: string]: ImageSourcePropType} = {
  gift_icon: require('./assets/img/gift_icon.png'),
  tree_icon: require('./assets/img/tree_icon.png'),
  people_icon: require('./assets/img/people_icon.png'),
  money_icon: require('./assets/img/money_icon.png'),
};

export const FAQ_ICONS_URL_DATA: {[key: string]: ImageSourcePropType} = {
  vacation_icon: require('./assets/img/vacation_icon.png'),
  umbrella_icon: require('./assets/img/umbrella_icon.png'),
  remote_work_icon: require('./assets/img/remote_work_icon.png'),
  sick_days_icon: require('./assets/img/sick_days_icon.png'),
  yoga_icon: require('./assets/img/ioga_icon.png'),
  gym_icon: require('./assets/img/gym_icon.png'),
  links_icon: require('./assets/img/links_icon.png'),
};

export enum BENEFITS_DISCOUNTS_CATEGORY {
  ALL = 'all',
  FOOD = 'food',
  DRINK = 'drink',
  SPORT = 'sport',
  BEAUTY = 'beauty',
}

export const POLICY_AGREEMENT_LINK = 'https://reactnative.dev/';

export const ACCESSIBLE_EMAIL = ['gmail.com'];
export const EMAIL_VALID_ERROR = 'email is not valid';

export enum DATE_CONSTANTS {
  SECONDS_IN_MINUTE = 60,
  SECONDS_IN_HOUR = 3600,
}

export enum ROUTES {
  SPLASH = 'splash',
  LOGIN = 'login',
  RULES = 'rules',
  APP = 'app',
  ERROR_SCREEN = 'errorScreen',
  PROFILE = 'profile',
  NEWS = 'news',
  DISCOUNTS = 'discounts',
  FAQ = 'faq',
  NOTIFICATION = 'notification',
  VIDEOS_TAB = 'videos_tab',
  DISCOUNTS_TAB = 'discounts_tab',
  FAQ_TAB = 'faq_tab',
  ADD_CONTENT_TAB = 'add_content_tab',
  FOOD_MESSAGE = 'food_message',
}

export const COUNTS_ITEMS_IN_MODAL_LIST = 2;

export enum NOTIFICATIONS_CATEGORIES {
  NEWS = 'news',
  FOOD = 'food',
}

export enum NOTIFICATIONS_SCREEN_CATEGORIES {
  ALL = 'all',
  UNREAD_MESSAGES = 'unreadMessage',
  FOOD = 'food',
  NEWS = 'news',
}

export enum CITIES {
  MINSK = 'minsk',
  MOGILEV = 'mogilev',
  GRODNO = 'grodno',
  GOMEL = 'gomel',
  VITEBSK = 'vitebsk',
}

export enum COMPANY_OFFICES_MINSK {
  SMOLYACHKOVA = 'smolyachkova',
  ZHUKOVA = 'zhukova',
}

export enum COMPANY_OFFICES_VITEBSK {
  SUVOROVA = 'suvorova',
  POBEDITELEU = 'pobediteleu',
}

export enum FORM_FIELD_NAMES {
  CITY = 'city',
  OFFICE = 'office',
  FLOOR = 'floor',
  ROOM = 'room',
}

export enum ERRORS {
  SELECT_FIELD_WAS_NOT_CHOSEN = 'selectFieldWasNotChosen',
}
