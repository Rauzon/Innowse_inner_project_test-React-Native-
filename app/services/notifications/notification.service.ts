import {INotificationState, NotificationDataType} from './notification.types';
import {BehaviorSubject} from 'rxjs';
import {notificationData} from './data';
import {NOTIFICATIONS_SCREEN_CATEGORIES} from '../../constants';
import {SetStateAction} from 'react';

class NotificationService {
  private notificationState$: BehaviorSubject<INotificationState> =
    new BehaviorSubject<INotificationState>({
      notificationsData: notificationData,
      notificationsCategories: [
        NOTIFICATIONS_SCREEN_CATEGORIES.ALL,
        NOTIFICATIONS_SCREEN_CATEGORIES.UNREAD_MESSAGES,
        NOTIFICATIONS_SCREEN_CATEGORIES.FOOD,
        NOTIFICATIONS_SCREEN_CATEGORIES.NEWS,
      ],
    } as INotificationState);
  constructor() {
    if (NotificationService.exists) {
      return NotificationService.instance;
    }
    NotificationService.instance = this;
    NotificationService.exists = true;
  }
  public getState = (): INotificationState => {
    return this.notificationState$.getValue();
  };
  public setTimeOfGetting = () => {
    const data = this.getState();
    const updatedData = data.notificationsData.map(
      (item: NotificationDataType) => {
        return {
          ...item,
          timeOfGetting: new Date(),
        };
      },
    );
    this.notificationState$.next({
      ...data,
      notificationsData: updatedData,
    });
  };
  public setItemIsViewedById = (id: string) => {
    const state$ = this.getState();
    const currentState$ = {
      ...state$,
      notificationsData: state$.notificationsData.map(item => {
        return item.id === id ? {...item, isViewed: true} : item;
      }),
    };
    this.notificationState$.next(currentState$);
  };
  public setItemsIsViewedAll = () => {
    const data = this.getState();
    const updatedData = {
      ...data,
      notificationsData: data.notificationsData.map(item => ({
        ...item,
        isViewed: true,
      })),
    };
    this.notificationState$.next(updatedData);
  };
  public subscribe = (callback: SetStateAction<any>) => {
    this.notificationState$.subscribe(callback);
  };
  public calcTime = () => {};
}

const notificationService = new NotificationService();

export default notificationService;
