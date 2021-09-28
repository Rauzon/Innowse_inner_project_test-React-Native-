import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';

interface ICountProps {
  children: JSX.Element;
  style: ViewStyle;
}

const Count = memo(({children, style}: ICountProps): JSX.Element => {
  return <View style={style}>{children}</View>;
});

export default Count;
