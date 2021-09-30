export type NotificationsCategoriesType =
  | 'Все'
  | 'Непрочитанные'
  | 'Еда'
  | 'Новости';

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
