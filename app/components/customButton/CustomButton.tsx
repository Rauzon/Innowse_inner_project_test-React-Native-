import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './customButton.styles';
import {CategoriesType} from '../../services/benefits/benefits.types';

interface ICustomButton {
  isLastItem?: boolean;
  content: CategoriesType;
  isFirstItem: boolean;
  onBtnPress(btnContent: string): void;
  isPressed: boolean;
}

const CustomButton = memo(
  ({
    content,
    isLastItem,
    isFirstItem,
    onBtnPress,
    isPressed,
  }: ICustomButton): JSX.Element => {
    const conditionStyle = isLastItem
      ? [styles.btn_wrapper, {marginRight: 16}]
      : isFirstItem
      ? [styles.btn_wrapper, {marginLeft: 16}]
      : styles.btn_wrapper;
    return (
      <Pressable
        style={
          isPressed
            ? [conditionStyle, {backgroundColor: '#C32D2C'}]
            : [conditionStyle, {backgroundColor: '#F0F0F0'}]
        }
        onPress={() => onBtnPress(content)}>
        <Text
          style={
            isPressed
              ? [styles.btn, {color: '#FFFFFF'}]
              : [styles.btn, {color: '#262B2F'}]
          }>
          {content}
        </Text>
      </Pressable>
    );
  },
);

export default CustomButton;
