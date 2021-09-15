import React, {memo} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {RULES_ICON_URL_DATA} from '../../../../constants';
import s from './ruleComponent.styles';

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
      <View key={id} style={!isLastItem ? s.rule_block : styleWithoutBorder}>
        <View style={s.image_block}>
          <Image source={RULES_ICON_URL_DATA[icon]} />
        </View>
        <Text style={s.title}>{title}</Text>
        <Text style={s.content}>{content}</Text>
      </View>
    );
  },
);

const styleWithoutBorder = StyleSheet.compose(
  s.rule_block,
  s.rule_block_without_border,
);

export default RuleComponent;
