import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './recommendRule.styles';
import {REFERRALS_ICONS_URL_DATA} from '../../../../../../constants';
import {RecommendationRuleType} from '../../../../../../services/benefits/benefits.types';

interface IRecommendRuleProps {
  isLastItem?: boolean;
  item: RecommendationRuleType;
}

const RecommendRule = memo(
  ({isLastItem, item}: IRecommendRuleProps): JSX.Element => {
    const {rule, iconName} = item;
    return (
      <View
        style={
          isLastItem
            ? [styles.item_wrapper, {borderBottomWidth: 0}]
            : styles.item_wrapper
        }>
        <View style={styles.icon_wrapper}>
          <Image source={REFERRALS_ICONS_URL_DATA[iconName]} />
        </View>
        <View>
          <Text style={styles.rule_text}>{rule}</Text>
        </View>
      </View>
    );
  },
);

export default RecommendRule;
