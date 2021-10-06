import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './customTopButton.styles';
import {useTranslation} from 'react-i18next';

interface ICustomButton {
  isLastItem?: boolean;
  content: string;
  isFirstItem: boolean;
  onBtnPress?(btnContent: string): void;
  isPressed: boolean;
}

const CustomTopButton = memo(
  ({
    content,
    isLastItem,
    isFirstItem,
    onBtnPress,
    isPressed,
  }: ICustomButton): JSX.Element => {
    const {t} = useTranslation();
    const onPress = () => {
      if (onBtnPress) {
        onBtnPress(content);
      }
    };
    const conditionStyle = isLastItem
      ? [styles.btn_wrapper, styles.right_gap]
      : isFirstItem
      ? [styles.btn_wrapper, styles.left_gap]
      : styles.btn_wrapper;
    return (
      <Pressable
        style={
          isPressed
            ? [conditionStyle, styles.backgroundColor_chosen]
            : conditionStyle
        }
        onPress={onPress}>
        <Text
          style={
            isPressed
              ? [styles.btn_text, styles.btn_text_chosen]
              : styles.btn_text
          }>
          {t(`couponScreen.${content}`)}
        </Text>
      </Pressable>
    );
  },
);

export default CustomTopButton;
