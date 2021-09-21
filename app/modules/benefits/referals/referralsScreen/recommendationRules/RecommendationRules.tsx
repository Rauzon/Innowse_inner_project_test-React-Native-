import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './recommendationRules.styles';
import {RecommendationRuleType} from '../../../../../services/benefits/benefits.types';
import RecommendRule from './recommendRule/RecommendRule';

interface IRecommendationRulesProps {
  rules: RecommendationRuleType[] | undefined;
}

const RecommendationRules = memo(
  ({rules}: IRecommendationRulesProps): JSX.Element => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Если у тебя есть знакомый / друг, которому могут быть интересны наши
          вакансии, и ты уверен, что он станет классным игроком команды Innowise
          Group – зови его к нам! Будем рады пообщаться и организовать интервью.
        </Text>
        <View>
          {rules?.map((item, i, arr) => (
            <RecommendRule
              key={item.id}
              isLastItem={i === arr.length - 1}
              item={item}
            />
          ))}
        </View>
      </View>
    );
  },
);

export default RecommendationRules;
