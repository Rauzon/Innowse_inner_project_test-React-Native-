import {INotificationState, NotificationDataType} from './notification.types';
import {BehaviorSubject} from 'rxjs';
import {notificationData} from './data';

class NotificationService {
  private notificationState$: BehaviorSubject<INotificationState> =
    new BehaviorSubject<INotificationState>({
      notificationsData: notificationData,
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
  public subscribe = (callback: any) => {
    this.notificationState$.subscribe(callback);
  };
  public calcTime = () => {};
}

const notificationService = new NotificationService();

export default notificationService;
