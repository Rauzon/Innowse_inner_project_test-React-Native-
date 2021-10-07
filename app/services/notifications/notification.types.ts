import {NOTIFICATIONS_SCREEN_CATEGORIES} from '../../constants';

export type NotificationsCategoriesType =
  | NOTIFICATIONS_SCREEN_CATEGORIES.ALL
  | NOTIFICATIONS_SCREEN_CATEGORIES.UNREAD_MESSAGES
  | NOTIFICATIONS_SCREEN_CATEGORIES.FOOD
  | NOTIFICATIONS_SCREEN_CATEGORIES.NEWS;

export type NotificationDataType = {
  id: string;
  isViewed: boolean;
  title: string;
  category: string;
  timeOfGetting: Date;
  newContent?: {
    headers?: string[];
    content?: Array<{subtitle?: string; text?: string}>;
  };
};

export interface INotificationState {
  notificationsData: NotificationDataType[];
  notificationsCategories: NotificationsCategoriesType[];
}
