import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import RuleComponent from '../authComponents/RuleComponent/RuleComponent';
import authService from '../../../services/auth/auth.service';
import {RuleDataType, RulesType} from '../../../services/auth/auth.types';
import styles from './rules.styles';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import OpenURLButton from '../../../components/OpenURLButton/OpenURLButton';
import {POLICY_AGREEMENT_LINK, ROUTES} from '../../../constants';
import ConfirmButton from '../../../components/ConfirmButton/ConfirmButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/appScreenNavigation/navigator.types';
import {useTranslation} from 'react-i18next';

type RulesScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.RULES
>;

const RulesScreen = (): JSX.Element => {
  const {t} = useTranslation();
  const {navigate} = useNavigation<RulesScreenProp>();
  const [rules, setRules] = useState({} as RulesType);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const rulesData = authService.getRules();
    if (rules) {
      setRules(rulesData);
    }
  }, [rules]);

  const onButtonPress = () => {
    if (isChecked) {
      navigate({name: ROUTES.APP, params: undefined});
    } else {
      Alert.alert(t('rulesScreen.notificationMessage'));
    }
  };

  const header = () => (
    <View style={styles.title}>
      <Text style={styles.title_content}>
        {t('rulesScreen.applicationRules')}
      </Text>
    </View>
  );

  const renderItem = ({item, index}: ListRenderItemInfo<RuleDataType>) => (
    <RuleComponent
      title={`${t('rulesScreen.ruleTitle')} №${index + 1}`}
      content={t(`rulesScreen.rules.rule_${index + 1}`)}
      key={item.id}
      icon={item.icon}
      isLastItem={index === rules?.rulesData.length - 1}
    />
  );

  const onCheckBoxValueChange = () => setIsChecked(prev => !prev);

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={header}
          data={rules?.rulesData}
          renderItem={renderItem}
        />
      </SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.policy_wrapper}>
          <CheckBox
            onChange={onCheckBoxValueChange}
            value={isChecked}
            style={styles.checkbox}
            tintColors={{true: '#C63031', false: '#C63031'}}
          />
          <View style={styles.policy_content_wrapper}>
            <Text style={styles.policy_content}>
              {t('rulesScreen.policyContent')}{' '}
              <OpenURLButton url={POLICY_AGREEMENT_LINK}>
                {t('rulesScreen.policyAgreementLink')}
              </OpenURLButton>
            </Text>
          </View>
        </View>
        <ConfirmButton style={styles.button} onPress={onButtonPress}>
          <Text style={styles.button_content}>
            {t('rulesScreen.button_text')}
          </Text>
        </ConfirmButton>
      </View>
    </View>
  );
};

export default RulesScreen;
