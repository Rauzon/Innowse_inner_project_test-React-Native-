import React, {memo, ReactNode} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import styles from './confirmButton.styles';

interface IConfirmButton {
  children: ReactNode;
  onPress(): void;
  style: ViewStyle | ViewStyle[];
  disabled?: boolean;
}

const ConfirmButton = memo(
  ({children, onPress, style, disabled}: IConfirmButton): JSX.Element => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.button_wrapper, style]}
        disabled={disabled}>
        {children}
      </Pressable>
    );
  },
);

export default ConfirmButton;
