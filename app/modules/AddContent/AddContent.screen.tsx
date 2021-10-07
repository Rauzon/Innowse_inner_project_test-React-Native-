import React from 'react';
import {View, Text} from 'react-native';
import styles from './addContentScreen.styles';
import AddContentTitleWrapper from '../../components/addContentCommonComponents/AddContentTitleWrapper/AddContentTitleWrapper';
import AddContentItemWrapper from '../../components/addContentCommonComponents/AddContentItemWrapper/AddContentItemWrapper';
import {
  AboutCompanyIcon,
  CalendarIcon,
  FoodMessageIcon,
  OfferAndIssueIcon,
  RequestOnOutIcon,
} from '../../Icons';
import {ROUTES} from '../../constants';
import {useTranslation} from 'react-i18next';

const AddContentScreen = (): JSX.Element => {
  const {FOOD_MESSAGE} = ROUTES;
  const {t} = useTranslation();
  return (
    <View>
      <AddContentTitleWrapper style={[styles.title_wrapper, styles.topBorder]}>
        <Text style={styles.title}>{t('addContentScreen.info')}</Text>
      </AddContentTitleWrapper>
      <AddContentItemWrapper route={FOOD_MESSAGE} icon={<AboutCompanyIcon />}>
        <Text style={styles.text_item}>
          {t('addContentScreen.aboutCompany')}
        </Text>
      </AddContentItemWrapper>
      <AddContentItemWrapper route={FOOD_MESSAGE} icon={<CalendarIcon />}>
        <Text style={styles.text_item}>
          {t('addContentScreen.calendarEvents')}
        </Text>
      </AddContentItemWrapper>
      <AddContentTitleWrapper style={[styles.title_wrapper]}>
        <Text style={styles.title}>{t('addContentScreen.actions')}</Text>
      </AddContentTitleWrapper>
      <AddContentItemWrapper route={FOOD_MESSAGE} icon={<OfferAndIssueIcon />}>
        <Text style={styles.text_item}>{t('addContentScreen.complaints')}</Text>
      </AddContentItemWrapper>
      <AddContentItemWrapper route={FOOD_MESSAGE} icon={<RequestOnOutIcon />}>
        <Text style={styles.text_item}>
          {t('addContentScreen.requestOnOff')}
        </Text>
      </AddContentItemWrapper>
      <AddContentItemWrapper route={FOOD_MESSAGE} icon={<FoodMessageIcon />}>
        <Text style={styles.text_item}>{t('profileScreen.iBroughtFood')}</Text>
      </AddContentItemWrapper>
    </View>
  );
};

export default AddContentScreen;
