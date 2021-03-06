import {CouponType, ReferralsDataType} from './benefits.types';
import {BENEFITS_DISCOUNTS_CATEGORY, CITIES} from '../../constants';

export const MinskCouponsData: CouponType[] = [
  {
    id: '1',
    sizeOfDiscount: '-25%',
    placeName: 'Сеть пиццерий Domino’s Pizza',
    category: BENEFITS_DISCOUNTS_CATEGORY.FOOD,
    discountMetaData: {
      condition: 'на доставку при онлайн заказе',
      login: 'innowise1@gmail.com',
      password: 'Pizza2020',
    },
    placeData: {
      phoneNumber: '+ 375 20 20 1030 123',
      address: 'Belarus, Lukashenko Petyh Avenue',
      socials: {instagram: '@petyshara'},
      workTime: {
        workDays: {start: '10:00', end: '19:00'},
        weekend: {start: '7:00', end: '23:00'},
      },
    },
  },
  {
    id: '2',
    sizeOfDiscount: '-10%',
    placeName: 'Сеть пиццерий Papa Johns',
    category: BENEFITS_DISCOUNTS_CATEGORY.FOOD,
    discountMetaData: {
      condition: 'на доставку при онлайн заказе',
      login: 'innowise1@gmail.com',
      password: 'Pizza2020',
    },
    placeData: {
      phoneNumber: '+ 375 123 123435 34543',
      address: 'Belarus, Lukashenko Idiot St.',
      socials: {instagram: '@idiot'},
      workTime: {
        workDays: {start: '10:00', end: '19:00'},
        weekend: {start: '7:00', end: '23:00'},
      },
    },
  },
  {
    id: '3',
    sizeOfDiscount: '-10%',
    placeName: 'Кафе Rosegose',
    category: BENEFITS_DISCOUNTS_CATEGORY.FOOD,
    discountMetaData: {
      description: 'Скидка по промокоду Innowise',
    },
    placeData: {
      phoneNumber: '+ 375 123 123435 34543',
      address: "Belarus, Lukashenko Moron's Square",
      socials: {instagram: '@moron'},
      workTime: {
        workDays: {start: '10:00', end: '19:00'},
        weekend: {start: '7:00', end: '23:00'},
      },
    },
  },
  {
    id: '4',
    sizeOfDiscount: '-10%',
    placeName: 'Адреналин',
    category: BENEFITS_DISCOUNTS_CATEGORY.SPORT,
    discountMetaData: {
      description: 'Скидка по промокоду Innowise',
    },
    placeData: {
      phoneNumber: '+ 375 123 123435 34543',
      address: "Belarus, Lukashenko Moron's Square",
      socials: {instagram: '@moron'},
      workTime: {
        workDays: {start: '10:00', end: '19:00'},
        weekend: {start: '7:00', end: '23:00'},
      },
    },
  },
];

export const VitebskCouponsData: CouponType[] = [
  {
    id: '1',
    sizeOfDiscount: '-65%',
    placeName: 'Лисица',
    category: BENEFITS_DISCOUNTS_CATEGORY.FOOD,
    discountMetaData: {
      condition: 'на доставку при онлайн заказе',
      login: 'innowise1@gmail.com',
      password: 'Pizza2020',
    },
    placeData: {
      phoneNumber: '+ 375 20 20 1030 123',
      address: 'Belarus, Lukashenko Petyh Avenue',
      socials: {instagram: '@petyshara'},
      workTime: {
        workDays: {start: '10:00', end: '19:00'},
        weekend: {start: '7:00', end: '23:00'},
      },
    },
  },
  {
    id: '2',
    sizeOfDiscount: '-50%',
    placeName: 'Теремок',
    category: BENEFITS_DISCOUNTS_CATEGORY.FOOD,
    discountMetaData: {
      condition: 'на доставку при онлайн заказе',
      login: 'innowise1@gmail.com',
      password: 'Pizza2020',
    },
    placeData: {
      phoneNumber: '+ 375 123 123435 34543',
      address: 'Belarus, Lukashenko Idiot St.',
      socials: {instagram: '@idiot'},
      workTime: {
        workDays: {start: '10:00', end: '19:00'},
        weekend: {start: '6:05', end: '6:06'},
      },
    },
  },
  {
    id: '3',
    sizeOfDiscount: '-60%',
    placeName: 'Кафе Rosegose',
    category: BENEFITS_DISCOUNTS_CATEGORY.FOOD,
    discountMetaData: {
      description: 'Скидка по промокоду Innowise',
    },
    placeData: {
      phoneNumber: '+ 375 123 123435 34543',
      address: "Belarus, Lukashenko Moron's Square",
      socials: {instagram: '@moron'},
      workTime: {
        workDays: {start: '10', end: '19'},
        weekend: {start: '7', end: '23'},
      },
    },
  },
  {
    id: '4',
    sizeOfDiscount: '-70%',
    placeName: 'Адреналин',
    category: BENEFITS_DISCOUNTS_CATEGORY.SPORT,
    discountMetaData: {
      description: 'Скидка по промокоду Innowise',
    },
    placeData: {
      phoneNumber: '+ 375 123 123435 34543',
      address: "Belarus, Lukashenko Moron's Square",
      socials: {instagram: '@moron'},
      workTime: {
        workDays: {start: '10', end: '19'},
        weekend: {start: '7', end: '23'},
      },
    },
  },
];

export const ReferralsData: ReferralsDataType = {
  vacancies: [
    {
      id: '1',
      vacancy: 'Tech Lead React',
      salary: '1000$',
      cities: [CITIES.MINSK, CITIES.VITEBSK],
    },
    {
      id: '2',
      vacancy: 'Tech Lead QA',
      salary: '1000$',
      cities: [CITIES.MINSK, CITIES.MOGILEV],
    },
    {
      id: '3',
      vacancy: 'Tech Lead Android',
      salary: '1000$',
      cities: [CITIES.MINSK],
    },
    {
      id: '4',
      vacancy: 'Tech Lead PHP',
      salary: '1000$',
      cities: [CITIES.MINSK],
    },
    {
      id: '5',
      vacancy: 'Tech Lead PHP',
      salary: '1000$',
      cities: [CITIES.MINSK, CITIES.GOMEL],
    },
  ],
  recommendationRules: [
    {
      id: '1',
      rule: 'Сотрудники имеют право на получение бонуса за кандидата любого уровня',
      iconName: 'gift_icon',
    },
    {
      id: '2',
      rule: 'Возможность рекомендовать в любую локацию',
      iconName: 'tree_icon',
    },
    {
      id: '3',
      rule: 'Если несколько человек выступают в качестве реферала для одного и того же кандидата, рефералом будет считаться тот, кто первым представил кандидата',
      iconName: 'people_icon',
    },
    {
      id: '4',
      rule: 'Премия выплачивается в заработную плату после прохождения кандидатом испытательного срока',
      iconName: 'money_icon',
    },
  ],
  recommendationSchema: [
    {id: '1', position: 'Trainee', bonus: '100$'},
    {id: '2', position: 'Junior', bonus: '200$'},
    {id: '3', position: 'Middle', bonus: '400$'},
    {id: '4', position: 'Senior', bonus: '800$'},
  ],
  contacts: [
    {
      id: '1',
      city: [CITIES.GOMEL],
      name: 'Виталий Ковальчук',
      mail: 'vitali@mail.ru',
    },
    {
      id: '2',
      city: [CITIES.VITEBSK],
      name: 'Лада Маханькова',
      mail: 'lada@gmail.com',
    },
    {
      id: '3',
      city: [CITIES.GOMEL, CITIES.MINSK, CITIES.MOGILEV, CITIES.GRODNO],
      name: 'Ольга Егорова',
      mail: 'olga@gmail.com',
    },
  ],
};
