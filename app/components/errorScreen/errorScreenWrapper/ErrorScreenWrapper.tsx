import React, {memo, ReactNode} from 'react';
import styles from './errorScreenWrapper.styles';
import {View} from 'react-native';
import {EmojiIcon} from '../../../Icons';

interface IErrorWrapperProps {
  children: ReactNode;
}

const ErrorScreenWrapper = memo(
  ({children}: IErrorWrapperProps): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={styles.icon_wrapper}>
          <EmojiIcon />
        </View>
        {children}
      </View>
    );
  },
);

export default ErrorScreenWrapper;
