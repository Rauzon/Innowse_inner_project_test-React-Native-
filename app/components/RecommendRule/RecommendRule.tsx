import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './recommendRule.styles';
import {REFERRALS_ICONS_URL_DATA} from '../../constants';
import {RecommendationRuleType} from '../../services/benefits/benefits.types';
import {useTranslation} from 'react-i18next';

interface IRecommendRule {
  isLastItem?: boolean;
  item: RecommendationRuleType;
  index: number;
}

const RecommendRule = memo(
  ({isLastItem, item, index}: IRecommendRule): JSX.Element => {
    const {t} = useTranslation('', {keyPrefix: 'referralsScreen.rules'});
    const {iconName} = item;

    const style = isLastItem
      ? [styles.item_wrapper, styles.without_bottom_border]
      : styles.item_wrapper;

    return (
      <View style={style}>
        <View style={styles.icon_wrapper}>
          <Image source={REFERRALS_ICONS_URL_DATA[iconName]} />
        </View>
        <View>
          <Text style={styles.rule_text}>{t(`rule_${index + 1}`)}</Text>
        </View>
      </View>
    );
  },
);

export default RecommendRule;
