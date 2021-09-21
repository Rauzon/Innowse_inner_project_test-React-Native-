import React from 'react';
import {View} from 'react-native';
import styles from './referrals.styles';
import WrapperComponent from './wrapperComponent/WrapperComponent';
import Vacancies from './vacancies/Vacancies';
import useGetBenefitsData from '../../../../hooks/useGetBenefitsData';
import RecommendationRules from './recommendationRules/RecommendationRules';
import ReferralsSchemaItem from './referralsSchemaItem/ReferralsSchemaItem';
import Contacts from './contacts/Contacts';

const Referrals = (): JSX.Element => {
  const data = useGetBenefitsData();
  const referrals = data?.referrals;

  return (
    <View style={styles.container}>
      <WrapperComponent title={'HOT Вакансии'}>
        <Vacancies vacancies={referrals?.vacancies} />
      </WrapperComponent>
      <WrapperComponent title={'Как это работает?'}>
        <RecommendationRules rules={referrals?.recommendationRules} />
      </WrapperComponent>
      <WrapperComponent title={'Схема реферальной программы'}>
        <ReferralsSchemaItem items={referrals?.recommendationSchema} />
      </WrapperComponent>
      <WrapperComponent title={'К кому обращаться?'}>
        <Contacts contacts={referrals?.contacts} />
      </WrapperComponent>
    </View>
  );
};

export default Referrals;
