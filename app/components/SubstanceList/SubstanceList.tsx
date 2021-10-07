import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import styles from './substanceList.styles';
import {useTranslation} from 'react-i18next';

interface ISubstance {
  headers: string[];
}

const SubstanceList = memo(({headers}: ISubstance): JSX.Element => {
  const {t} = useTranslation();

  const header = () => (
    <Text style={styles.title}>{t('newsScreen.content')}</Text>
  );

  const renderItem = ({item, index}: ListRenderItemInfo<string>) => (
    <Text style={styles.subtitle} key={index}>
      {item}
    </Text>
  );

  return headers.length ? (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={header}
        data={headers}
        renderItem={renderItem}
      />
    </View>
  ) : (
    <></>
  );
});

export default SubstanceList;
