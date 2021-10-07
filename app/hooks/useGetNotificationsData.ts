import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import notificationService from '../services/notifications/notification.service';
import {
  INotificationState,
  NotificationDataType,
} from '../services/notifications/notification.types';
import getPastTimeValue from '../helpers/getPastTimeValue';
import {useTranslation} from 'react-i18next';

export interface INotificationDataType extends NotificationDataType {
  pastTime: string;
}

type ResultHookType = {
  data: INotificationDataType[] | null;
  categories: string[];
};

const useGetNotificationsData = (): ResultHookType => {
  const [initialData, setInitialData] = useState<INotificationState | null>(
    null,
  );
  const [data, setData] = useState<INotificationDataType[] | null>(null);
  const {t} = useTranslation();

  useEffect(() => {
    notificationService.setTimeOfGetting();
  }, []);
  useEffect(() => {
    notificationService.subscribe<
      Dispatch<SetStateAction<INotificationState | null>>
    >(setInitialData);
  }, []);

  useEffect(() => {
    const setCurrentNotificationsData = (
      notifications: NotificationDataType[],
    ): INotificationDataType[] =>
      notifications.map((item: NotificationDataType): INotificationDataType => {
        return {
          ...item,
          pastTime: getPastTimeValue(item.timeOfGetting, {
            min: t('timeNaming.minutes'),
            sec: t('timeNaming.seconds'),
          }),
        };
      });
    if (initialData) {
      const newData = setCurrentNotificationsData(
        initialData.notificationsData,
      );
      setData(newData);
    }
  }, [initialData, t]);
  return {data, categories: initialData?.notificationsCategories!};
};

export default useGetNotificationsData;
