import React, {memo, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './addContentTitleWrapper.styles';

interface IAddContentItem {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const AddContentTitleWrapper = memo(
  ({children, style}: IAddContentItem): JSX.Element => {
    return <View style={[styles.container, style]}>{children}</View>;
  },
);

export default AddContentTitleWrapper;
