import React, {memo} from 'react';
import {Text, View} from 'react-native';
import s from './substanceList.styles';

interface ISubstanceProps {
  headers: string[];
}

const SubstanceList = memo(({headers}: ISubstanceProps): JSX.Element => {
  return headers.length ? (
    <View style={s.container}>
      <Text style={s.title}>Содержание</Text>
      {headers.map((header, index) => {
        return (
          <Text style={s.subtitle} key={index}>
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
