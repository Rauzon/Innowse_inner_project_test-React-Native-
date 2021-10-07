import React, {memo} from 'react';
import {View, Text, Pressable, ViewStyle} from 'react-native';
import styles from './customAppHeader.styles';

type StylePropsType = {
  pressed: boolean;
};

interface ICustomAppHeader {
  rightBtnContent: string;
  leftBtnContent: string;
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const CustomAppHeader = memo(
  ({
    rightBtnContent,
    leftBtnContent,
    isLeftButtonPressed,
    pressRightButton,
    isRightButtonPressed,
    pressLeftButton,
  }: ICustomAppHeader): JSX.Element => {
    const pressLeftBtnHandler = ({pressed}: StylePropsType) =>
      pressLeftButton(pressed);
    const pressRightBtnHandler = ({pressed}: StylePropsType) =>
      pressRightButton(pressed);

    const leftBtnStyles = isLeftButtonPressed
      ? [styles.button_content_selected]
      : styles.button_content;

    const rightBtnStyles = isRightButtonPressed
      ? [styles.button_content_selected]
      : styles.button_content;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.inner}>
            <Pressable style={pressLeftBtnHandler}>
              <Text style={leftBtnStyles}>{leftBtnContent}</Text>
            </Pressable>
            <Pressable style={pressRightBtnHandler}>
              <Text style={rightBtnStyles}>{rightBtnContent}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  },
);

export default CustomAppHeader;
