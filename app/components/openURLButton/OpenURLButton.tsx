import React, {ReactNode, useCallback} from 'react';
import {Alert, Linking, Text} from 'react-native';

interface IOpenURLButtonProps {
  url: string;
  children: ReactNode;
}

const OpenURLButton = ({url, children}: IOpenURLButtonProps): JSX.Element => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text style={{color: '#C63031'}} onPress={handlePress}>
      {children}
    </Text>
  );
};

export default OpenURLButton;
