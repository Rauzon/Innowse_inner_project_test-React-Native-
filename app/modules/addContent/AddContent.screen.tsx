import React from 'react';
import {View, Text} from 'react-native';
import styles from './addContentScreen.styles';
import AddContentTitleWrapper from '../../components/addContentCommonComponents/addContentTitleWrapper/AddContentTitleWrapper';
import AddContentItemWrapper from '../../components/addContentCommonComponents/addContentItemWrapper/AddContentItemWrapper';
import {
  AboutCompanyIcon,
  CalendarIcon,
  FoodMessageIcon,
  OfferAndIssueIcon,
  RequestOnOutIcon,
} from '../../Icons';
import {ROUTES} from '../../constants';

const AddContentScreen = (): JSX.Element => {
  const {FOOD_MESSAGE} = ROUTES;

  return (
    <View>
      <AddContentTitleWrapper style={[styles.title_wrapper, styles.topBorder]}>
        <Text style={styles.title}>Информация</Text>
      </AddContentTitleWrapper>
      <AddContentItemWrapper route={''} icon={<AboutCompanyIcon />}>
        <Text style={styles.text_item}>О компании</Text>
      </AddContentItemWrapper>
      <AddContentItemWrapper route={''} icon={<CalendarIcon />}>
        <Text style={styles.text_item}>Календарь событий</Text>
      </AddContentItemWrapper>
      <AddContentTitleWrapper style={[styles.title_wrapper]}>
        <Text style={styles.title}>Действия</Text>
      </AddContentTitleWrapper>
      <AddContentItemWrapper route={''} icon={<OfferAndIssueIcon />}>
        <Text style={styles.text_item}>Жалоба или предложение</Text>
      </AddContentItemWrapper>
      <AddContentItemWrapper route={''} icon={<RequestOnOutIcon />}>
        <Text style={styles.text_item}>Запрос на отсутствие</Text>
      </AddContentItemWrapper>
      <AddContentItemWrapper route={FOOD_MESSAGE} icon={<FoodMessageIcon />}>
        <Text style={styles.text_item}>Я принёс еду</Text>
      </AddContentItemWrapper>
    </View>
  );
};

export default AddContentScreen;
