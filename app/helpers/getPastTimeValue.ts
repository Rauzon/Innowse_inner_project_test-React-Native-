import {DATE_CONSTANTS} from '../constants';

const getPastTimeValue = (date: Date): string => {
  const seconds = (new Date().getTime() - date.getTime()) / 1000;

  switch (true) {
    case seconds < DATE_CONSTANTS.SECONDS_IN_MINUTE:
      return `${Math.floor(seconds)} сек`;
    case DATE_CONSTANTS.SECONDS_IN_MINUTE < seconds &&
      seconds < DATE_CONSTANTS.SECONDS_IN_HOUR:
      return `${Math.floor(seconds / 60)} мин`;
    default:
      return `${date.getHours()}:${date.getMinutes()}`;
  }
};

export default getPastTimeValue;
