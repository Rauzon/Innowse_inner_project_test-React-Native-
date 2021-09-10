import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import s from './customAppHeader.styles';
import useButtonsSwitch from '../../../hooks/useButtonsSwitch';

interface ICustomAppHeaderProps {
  rightBtnContent: string;
  leftBtnContent: string;
}

const CustomAppHeader = memo(
  ({rightBtnContent, leftBtnContent}: ICustomAppHeaderProps): JSX.Element => {
    const {
      isRightButtonPressed,
      isLeftButtonPressed,
      pressRightButton,
      pressLeftButton,
    } = useButtonsSwitch();

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
