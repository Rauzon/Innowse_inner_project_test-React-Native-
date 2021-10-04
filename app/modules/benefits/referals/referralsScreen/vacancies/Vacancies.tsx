import React, {memo} from 'react';
import {View} from 'react-native';
import styles from './vacancies.styles';
import {VacancyType} from '../../../../../services/benefits/benefits.types';
import VacancyItem from '../../../../../components/vacancyItem/VacancyItem';

interface IVacancies {
  vacancies: VacancyType[] | undefined;
}

const Vacancies = memo(({vacancies}: IVacancies): JSX.Element => {
  return (
    <View style={styles.container}>
      {vacancies?.map((item, i, arr) => (
        <VacancyItem
          key={i}
          isFirstItem={i === 0}
          isLastItem={i === arr.length - 1}
          item={item}
        />
      ))}
    </View>
  );
});

export default Vacancies;
