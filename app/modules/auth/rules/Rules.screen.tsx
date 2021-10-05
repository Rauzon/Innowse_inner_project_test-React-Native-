import React, {useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import RuleComponent from './components/RuleComponent';
import authService from '../../../services/auth/auth.service';
import {RulesType} from '../../../services/auth/auth.types';
import styles from './rules.styles';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import OpenURLButton from '../../../components/openURLButton/OpenURLButton';
import {POLICY_AGREEMENT_LINK, ROUTES} from '../../../constants';
import ConfirmButton from '../../../components/confirmButton/ConfirmButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigator/navigator.types';
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
      navigate(ROUTES.APP as never);
    } else {
      Alert.alert(t('rulesScreen.notificationMessage'));
    }
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.title}>
              <Text style={styles.title_content}>
                {t('rulesScreen.applicationRules')}
              </Text>
            </View>
          )}
          data={rules?.rulesData}
          renderItem={({item, index}) => (
            <RuleComponent
              title={`${t('rulesScreen.ruleTitle')} №${index + 1}`}
              content={t(`rulesScreen.rules.rule_${index + 1}`)}
              key={item.id}
              icon={item.icon}
              isLastItem={index === rules?.rulesData.length - 1}
            />
          )}
        />
      </SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.policy_wrapper}>
          <CheckBox
            onChange={() => setIsChecked(!isChecked)}
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
