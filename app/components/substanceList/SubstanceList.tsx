import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './substanceList.styles';

interface ISubstanceProps {
  headers: string[];
}

const SubstanceList = memo(({headers}: ISubstanceProps): JSX.Element => {
  return headers.length ? (
    <View style={styles.container}>
      <Text style={styles.title}>Содержание</Text>
      {headers.map((header, index) => {
        return (
          <Text style={styles.subtitle} key={index}>
            {header}
          </Text>
        );
      })}
    </View>
  ) : (
    <></>
  );
});

export default SubstanceList;
