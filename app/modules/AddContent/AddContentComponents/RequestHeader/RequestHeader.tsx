import React, {memo} from 'react';
import {ImageBackground} from 'react-native';
import styles from './requestHeader.styles';
import RequestHeaderItem from '../RequestHeaderItem/RequestHeaderItem';
import {useTranslation} from 'react-i18next';
import {SickDayIcon, VacationIcon} from '../../../../Icons';

interface IRequestHeader {}

const RequestHeader = memo(({}: IRequestHeader): JSX.Element => {
  const {t} = useTranslation();
  return (
    <ImageBackground
      source={require('../../../../assets/img/requestInfoCardFon.png')}
      resizeMode={'cover'}
      style={styles.container}>
      <RequestHeaderItem
        text={t('requestsScreen.sickDay')}
        daysCount={3}
        iconComponent={<SickDayIcon />}
        style={styles.border}
      />
      <RequestHeaderItem
        text={t('requestsScreen.countVacation')}
        daysCount={10.3}
        iconComponent={<VacationIcon />}
      />
    </ImageBackground>
  );
});

export default RequestHeader;
