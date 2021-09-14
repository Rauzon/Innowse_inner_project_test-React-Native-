import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import s from './customAppHeader.styles';

interface ICustomAppHeaderProps {
  rightBtnContent: string;
  leftBtnContent: string;
  isRightButtonPressed: boolean | undefined;
  isLeftButtonPressed: boolean | undefined;
  pressRightButton: ((pressed: boolean) => any[]) | undefined;
  pressLeftButton: ((pressed: boolean) => any[]) | undefined;
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
      <View style={s.container}>
        <View style={s.wrapper}>
          <View style={s.inner}>
            <Pressable style={({pressed}) => pressLeftButton(pressed)}>
              <Text
                style={[
                  {
                    color: isLeftButtonPressed ? '#FFF' : '#828282',
                  },
                  s.button_content,
                ]}>
                {leftBtnContent}
              </Text>
            </Pressable>
            <Pressable style={({pressed}) => pressRightButton(pressed)}>
              <Text
                style={[
                  {
                    color: isRightButtonPressed ? '#FFF' : '#828282',
                  },
                  s.button_content,
                ]}>
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
