import React, {ReactNode, useCallback} from 'react';
import {Alert, Linking, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

interface IOpenURLButton {
  url: string;
  children: ReactNode;
}

const OpenURLButton = ({url, children}: IOpenURLButton): JSX.Element => {
  const {t} = useTranslation();
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`${t('errorMessage.openUrlErrorMessage')} ${url}`);
    }
  }, [url, t]);

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
