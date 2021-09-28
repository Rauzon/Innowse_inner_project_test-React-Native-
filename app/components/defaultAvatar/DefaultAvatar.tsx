import {Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {memo} from 'react';

interface IDefaultAvatarProps {
  initials?: string | null;
  componentStyle: {
    button_wrapper: ViewStyle;
    content: TextStyle;
  };
}

const DefaultAvatar = memo(
  ({initials = 'US', componentStyle}: IDefaultAvatarProps): JSX.Element => (
    <View style={componentStyle?.button_wrapper}>
      <Text style={componentStyle?.content}>{initials}</Text>
    </View>
  ),
);

export default DefaultAvatar;
