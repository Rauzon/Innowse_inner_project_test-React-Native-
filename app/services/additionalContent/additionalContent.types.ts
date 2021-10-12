import {
  CITIES,
  COMPANY_OFFICES_MINSK,
  COMPANY_OFFICES_VITEBSK,
} from '../../constants';

export type CitiesType = CITIES.MINSK | CITIES.VITEBSK;

export type OfficesType =
  | COMPANY_OFFICES_MINSK.ZHUKOVA
  | COMPANY_OFFICES_MINSK.SMOLYACHKOVA
  | COMPANY_OFFICES_VITEBSK.SUVOROVA
  | COMPANY_OFFICES_VITEBSK.POBEDITELEU;

export type OfficeDataType = Partial<Record<number, number[]>>;

export type FoodMessageCityDataType = Partial<
  Record<OfficesType, OfficeDataType>
>;

export type FoodMessageType = Partial<
  Record<CitiesType, FoodMessageCityDataType>
>;

export interface IActionData {
  foodMessage: FoodMessageType;
}

export interface IAdditionalContentState {
  information: any;
  actionsData: IActionData;
}
