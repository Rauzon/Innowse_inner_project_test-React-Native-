import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from './wrapperComponent.styles';

interface IWrapper {
  title: string;
  children: ReactNode;
}

const WrapperComponent = ({title, children}: IWrapper): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title_wrapper}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

export default WrapperComponent;
