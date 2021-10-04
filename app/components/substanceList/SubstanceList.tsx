import React, {memo} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './substanceList.styles';

interface ISubstance {
  headers: string[];
}

const SubstanceList = memo(({headers}: ISubstance): JSX.Element => {
  return headers.length ? (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Text style={styles.title}>Содержание</Text>}
        data={headers}
        renderItem={({item, index}) => (
          <Text style={styles.subtitle} key={index}>
            {item}
          </Text>
        )}
      />
    </View>
  ) : (
    <></>
  );
});

export default SubstanceList;
