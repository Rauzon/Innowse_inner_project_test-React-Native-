import React, {ReactNode, useCallback} from 'react';
import {Alert, Linking, StyleSheet, Text} from 'react-native';

interface IOpenURLButton {
  url: string;
  children: ReactNode;
}

const OpenURLButton = ({url, children}: IOpenURLButton): JSX.Element => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text style={styles.content} onPress={handlePress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  content: {
    color: '#C63031',
  },
});

export default OpenURLButton;
