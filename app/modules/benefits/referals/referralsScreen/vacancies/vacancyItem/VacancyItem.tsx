import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {VacancyType} from '../../../../../../services/benefits/benefits.types';
import styles from './vacancyItem.styles';

interface IVacancyItemProps {
  item: VacancyType;
  isLastItem?: boolean;
  isFirstItem?: boolean;
}

const VacancyItem = memo(
  ({item, isLastItem, isFirstItem}: IVacancyItemProps): JSX.Element => {
    const {vacancy, salary, cities} = item;
    const style = isFirstItem
      ? [styles.container, styles.container_firstItem]
      : isLastItem
      ? [styles.container, styles.container_lastItem]
      : [styles.container];
    return (
      <View style={style}>
        <View style={styles.vacancy_wrapper}>
          <Text style={styles.vacancy}>{vacancy}</Text>
        </View>
        <View style={styles.content_wrapper}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.city}>{cities.join(', ')}</Text>
        </View>
      </View>
    );
  },
);

export default VacancyItem;
