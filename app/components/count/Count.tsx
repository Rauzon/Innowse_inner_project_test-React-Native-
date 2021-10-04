import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';

interface ICount {
  children: JSX.Element;
  style: ViewStyle;
}

const Count = memo(({children, style}: ICount): JSX.Element => {
  return <View style={style}>{children}</View>;
});

export default Count;
