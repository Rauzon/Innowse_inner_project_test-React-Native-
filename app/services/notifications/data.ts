import {NotificationDataType} from './notification.types';
import {NOTIFICATIONS_CATEGORIES} from '../../constants';

export const notificationData: NotificationDataType[] = [
  {
    id: '1',
    title:
      '“Как сделать SRS документ?”. Переходи по ссылке, чтобы узнать подробности',
    category: NOTIFICATIONS_CATEGORIES.NEWS,
    timeOfGetting: new Date(),
    isViewed: false,
    newContent: {
      headers: [],
      content: [{subtitle: '', text: ''}],
    },
  },
  {
    id: '2',
    title:
      'В твоём офисе появилась еда! Приходи в 206 офис скорее, если хочешь успеть. И не забудь сказать спасибо Анна Петрова.',
    category: NOTIFICATIONS_CATEGORIES.FOOD,
    timeOfGetting: new Date(),
    isViewed: false,
    newContent: {
      headers: [],
      content: [{subtitle: '', text: ''}],
    },
  },
  {
    id: '3',
    title:
      'Как сделать SRS документ?. Переходи по ссылке, чтобы узнать подробности',
    category: NOTIFICATIONS_CATEGORIES.NEWS,
    timeOfGetting: new Date(),
    isViewed: false,
    newContent: {
      headers: [],
      content: [{subtitle: '', text: ''}],
    },
  },
  {
    id: '4',
    title: 'Еда в офисе!',
    category: NOTIFICATIONS_CATEGORIES.FOOD,
    timeOfGetting: new Date(),
    isViewed: false,
    newContent: {
      headers: [],
      content: [{subtitle: '', text: ''}],
    },
  },
];
