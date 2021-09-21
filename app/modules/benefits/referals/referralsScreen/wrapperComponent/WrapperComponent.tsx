import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from './wrapperComponent.styles';

interface IWrapperProps {
  title: string;
  children: ReactNode;
}

const WrapperComponent = ({title, children}: IWrapperProps): JSX.Element => {
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
