import React from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import RequestHeader from '../AddContentComponents/RequestHeader/RequestHeader';
import ConfirmButton from '../../../components/ConfirmButton/ConfirmButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/appScreenNavigation/navigator.types';
import {ROUTES} from '../../../constants';
import {useTranslation} from 'react-i18next';
import styles from './requests.styles';
import LinearGradient from 'react-native-linear-gradient';

type RequestScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.REQUEST_FORM
>;

const RequestsScreen = (): JSX.Element => {
  const {navigate} = useNavigation<RequestScreenProp>();
  const {t} = useTranslation();
  const renderItem = ({item, index, separators}: ListRenderItemInfo<{}>) => {
    return (
      //TODO complete this
      <View>
        <Text>Item</Text>
      </View>
    );
  };

  const onPressBtn = () => {
    navigate({name: ROUTES.REQUEST_FORM, params: undefined});
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={RequestHeader}
        data={[{}, {}, {}, {}]}
        renderItem={renderItem}
      />
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.5)',
          '#FFF',
        ]}
        style={styles.button_wrapper}>
        <ConfirmButton onPress={onPressBtn} style={styles.button}>
          <Text style={styles.button_text}>
            {t('requestsScreen.createRequest')}
          </Text>
        </ConfirmButton>
      </LinearGradient>
    </View>
  );
};

export default RequestsScreen;
