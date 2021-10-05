import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import styles from './ruleComponent.styles';
import {RULES_ICON_URL_DATA} from '../../../../constants';

interface IRuleComponent {
  title: string;
  content?: string;
  icon: string;
  isLastItem?: boolean;
}

const RuleComponent = memo(
  ({title, content, icon, isLastItem}: IRuleComponent) => {
    return (
      <View style={!isLastItem ? styles.rule_block : styleWithoutBorder}>
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
