import {NotificationsCategoriesType} from '../services/notifications/notification.types';
import {NOTIFICATIONS_SCREEN_CATEGORIES} from '../constants';
import {INotificationDataType} from '../hooks/useGetNotificationsData';

const getFilteredNotificationsItems = (
  currentCategory: NotificationsCategoriesType,
  data: INotificationDataType[] | null,
): INotificationDataType[] | null => {
  if (NOTIFICATIONS_SCREEN_CATEGORIES.UNREAD_MESSAGES === currentCategory) {
    return data?.filter(({isViewed}) => !isViewed)!;
  } else if (NOTIFICATIONS_SCREEN_CATEGORIES.ALL !== currentCategory) {
    return data?.filter(({category}) => category === currentCategory)!;
  } else {
    return data;
  }
};

export default getFilteredNotificationsItems;
