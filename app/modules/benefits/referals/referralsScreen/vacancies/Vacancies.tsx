import React, {memo} from 'react';
import {View} from 'react-native';
import styles from './vacancies.styles';
import {VacancyType} from '../../../../../services/benefits/benefits.types';
import VacancyItem from './vacancyItem/VacancyItem';

interface IVacanciesProps {
  vacancies: VacancyType[] | undefined;
}

const Vacancies = memo(({vacancies}: IVacanciesProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {vacancies?.map((item, i, arr) => (
        <VacancyItem
          isFirstItem={i === 0}
          isLastItem={i === arr.length - 1}
          item={item}
        />
      ))}
    </View>
  );
});

export default Vacancies;
