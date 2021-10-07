import React from 'react';
import {View} from 'react-native';
import styles from './referrals.styles';
import WrapperComponent from './WrapperComponent/WrapperComponent';
import Vacancies from './Vacancies/Vacancies';
import useGetBenefitsData from '../../../../hooks/useGetBenefitsData';
import RecommendationRules from './RecommendationRules/RecommendationRules';
import ReferralsSchemaItem from './ReferralsSchemaItem/ReferralsSchemaItem';
import Contacts from './Contacts/Contacts';
import {useTranslation} from 'react-i18next';

const Referrals = (): JSX.Element => {
  const {t} = useTranslation();
  const data = useGetBenefitsData();
  const referrals = data?.referrals!;

  return (
    <View style={styles.container}>
      <WrapperComponent title={t('referralsScreen.vacancies')}>
        <Vacancies vacancies={referrals?.vacancies} />
      </WrapperComponent>
      <WrapperComponent title={t('referralsScreen.howItWorks')}>
        <RecommendationRules rules={referrals?.recommendationRules} />
      </WrapperComponent>
      <WrapperComponent title={t('referralsScreen.referralSchema')}>
        <ReferralsSchemaItem items={referrals?.recommendationSchema} />
      </WrapperComponent>
      <WrapperComponent title={t('referralsScreen.whoHaveToGo')}>
        <Contacts contacts={referrals?.contacts} />
      </WrapperComponent>
    </View>
  );
};

export default Referrals;
