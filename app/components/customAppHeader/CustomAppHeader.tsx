import React, {memo} from 'react';
import {View, Text, Pressable, ViewStyle} from 'react-native';
import styles from './customAppHeader.styles';

interface ICustomAppHeaderProps {
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
  }: ICustomAppHeaderProps): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.inner}>
            <Pressable style={({pressed}) => pressLeftButton(pressed)}>
              <Text
                style={
                  isLeftButtonPressed
                    ? [styles.button_content_selected]
                    : styles.button_content
                }>
                {leftBtnContent}
              </Text>
            </Pressable>
            <Pressable style={({pressed}) => pressRightButton(pressed)}>
              <Text
                style={
                  isRightButtonPressed
                    ? [styles.button_content_selected]
                    : styles.button_content
                }>
                {rightBtnContent}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  },
);

export default CustomAppHeader;
