import React, {memo, ReactNode} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import styles from './confirmButton.styles';

interface IConfirmButton {
  children: ReactNode;
  onPress(): void;
  style: ViewStyle;
}

const ConfirmButton = memo(
  ({children, onPress, style}: IConfirmButton): JSX.Element => {
    return (
      <Pressable onPress={onPress} style={[styles.button_wrapper, style]}>
        {children}
      </Pressable>
    );
  },
);

export default ConfirmButton;