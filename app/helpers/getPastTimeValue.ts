import {DATE_CONSTANTS} from '../constants';

type TranslatedTimeNameType = {
  min: string;
  sec: string;
};

const getPastTimeValue = (
  date: Date,
  translatedTimeName: TranslatedTimeNameType,
): string => {
  const seconds = (new Date().getTime() - date.getTime()) / 1000;
  const {sec, min} = translatedTimeName;

  switch (true) {
    case seconds < DATE_CONSTANTS.SECONDS_IN_MINUTE:
      return `${Math.floor(seconds)} ${sec}`;
    case DATE_CONSTANTS.SECONDS_IN_MINUTE < seconds &&
      seconds < DATE_CONSTANTS.SECONDS_IN_HOUR:
      return `${Math.floor(seconds / 60)} ${min}`;
    default:
      return `${date.getHours()}:${date.getMinutes()}`;
  }
};

export default getPastTimeValue;
