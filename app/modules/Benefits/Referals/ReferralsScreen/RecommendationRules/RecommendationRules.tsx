import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './recommendationRules.styles';
import {RecommendationRuleType} from '../../../../../services/benefits/benefits.types';
import RecommendRule from '../../../../../components/RecommendRule/RecommendRule';
import {useTranslation} from 'react-i18next';

interface IRecommendationRules {
  rules: RecommendationRuleType[] | undefined;
}

const RecommendationRules = memo(
  ({rules}: IRecommendationRules): JSX.Element => {
    const {t} = useTranslation();
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {t('referralsScreen.whoHaveToGoDescription')}
        </Text>
        <View>
          {rules?.map((item, i, arr) => (
            <RecommendRule
              key={item.id}
              isLastItem={i === arr.length - 1}
              item={item}
              index={i}
            />
          ))}
        </View>
      </View>
    );
  },
);

export default RecommendationRules;
