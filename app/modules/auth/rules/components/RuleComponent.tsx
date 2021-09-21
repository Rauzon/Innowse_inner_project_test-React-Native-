import React, {memo} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {RULES_ICON_URL_DATA} from '../../../../constants';
import styles from './ruleComponent.styles';

type RuleComponentPropsType = {
  title: string;
  content?: string;
  icon: string;
  isLastItem?: boolean;
  id: string;
};

const RuleComponent = memo(
  ({id, title, content, icon, isLastItem}: RuleComponentPropsType) => {
    return (
      <View key={id} style={!isLastItem ? styles.rule_block : styleWithoutBorder}>
        <View style={styles.image_block}>
          <Image source={RULES_ICON_URL_DATA[icon]} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  },
);

const styleWithoutBorder = StyleSheet.compose(
  styles.rule_block,
  styles.rule_block_without_border,
);

export default RuleComponent;
