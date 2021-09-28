import {useEffect, useState} from 'react';
import notificationService from '../services/notifications/notification.service';
import {
  INotificationState,
  NotificationDataType,
} from '../services/notifications/notification.types';
import getPastTimeValue from '../helpers/getPastTimeValue';

export interface INotificationDataType extends NotificationDataType {
  pastTime: string;
}

const useGetNotificationsData = (): INotificationDataType[] | null => {
  const [initialData, setInitialData] = useState<INotificationState | null>(
    null,
  );
  const [data, setData] = useState<INotificationDataType[] | null>(null);

  useEffect(() => {
    notificationService.setTimeOfGetting();
  }, []);
  useEffect(() => {
    notificationService.subscribe(setInitialData);
  }, []);

  useEffect(() => {
    const setCurrentNotificationsData = (
      notifications: NotificationDataType[],
    ): INotificationDataType[] =>
      notifications.map((item: NotificationDataType): INotificationDataType => {
        return {
          ...item,
          pastTime: getPastTimeValue(item.timeOfGetting),
        };
      });
    if (initialData) {
      const newData = setCurrentNotificationsData(
        initialData.notificationsData,
      );
      setData(newData);
    }
  }, [initialData]);
  return data;
};

export default useGetNotificationsData;
