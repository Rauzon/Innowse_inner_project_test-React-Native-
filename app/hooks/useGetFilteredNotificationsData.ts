import {useCallback, useEffect, useState} from 'react';
import {NOTIFICATIONS_SCREEN_CATEGORIES} from '../constants';
import {NotificationsCategoriesType} from '../services/notifications/notification.types';
import getFilteredNotificationsItems from '../helpers/getFilteredNotificationsItems';
import {INotificationDataType} from './useGetNotificationsData';
import notificationService from '../services/notifications/notification.service';

interface IUseNotificationsDataProps {
  onBtnPress(category: string): void;
  chosenCategory: NotificationsCategoriesType;
  currentData: INotificationDataType[] | null;
  setAllMessagesViewedPress(): void;
}

const useGetFilteredNotificationsData = (
  data: INotificationDataType[] | null,
): IUseNotificationsDataProps => {
  const [chosenCategory, setChosenCategory] =
    useState<NotificationsCategoriesType>(NOTIFICATIONS_SCREEN_CATEGORIES.ALL);
  const [currentData, setCurrentData] = useState<
    INotificationDataType[] | null
  >([]);

  const onBtnPress = useCallback(
    (currentCategory: NotificationsCategoriesType) => {
      setChosenCategory(currentCategory);
    },
    [],
  );

  const setAllMessagesViewedPress = useCallback(() => {
    notificationService.setItemsIsViewedAll();
  }, []);

  useEffect(() => {
    const filteredData = getFilteredNotificationsItems(chosenCategory, data);
    setCurrentData(filteredData);
  }, [chosenCategory, data]);

  return {chosenCategory, onBtnPress, currentData, setAllMessagesViewedPress};
};

export default useGetFilteredNotificationsData;
