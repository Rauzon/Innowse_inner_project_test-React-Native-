import React, {memo} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

type RuleComponentType = {
  title: string;
  content?: string;
  icon: string;
  isLastItem?: boolean;
};

//TODO move data
const urlData: {[key: string]: string} = {
  firstIcon: require('../../../../assets/img/rule_icon_1.png'),
  secondIcon: require('../../../../assets/img/rule_icon_2.png'),
};

const RuleComponent = memo(
  ({title, content, icon, isLastItem}: RuleComponentType) => {
    return (
      <View style={!isLastItem ? styles.rule_block : styleWithoutBorder}>
        <View style={styles.image_block}>
          <Image source={urlData[icon]} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  rule_block: {
    width: 343,
    height: 201,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    borderStyle: 'solid',
    marginBottom: 24,
  },
  rule_block_without_border: {
    borderBottomWidth: 0,
  },
  image_block: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#F8F8F8',
  },
  title: {
    marginTop: 8,
    marginBottom: 5,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 33,
    letterSpacing: 0.25,
  },
  content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: '#828282',
  },
});

const styleWithoutBorder = StyleSheet.compose(
  styles.rule_block,
  styles.rule_block_without_border,
);

export default RuleComponent;
