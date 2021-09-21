import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import RuleComponent from './components/RuleComponent';
import authService from '../../../services/auth/auth.service';
import {RulesType} from '../../../services/auth/auth.types';
import styles from './rules.styles';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import OpenURLButton from "../../../components/openURLButton/OpenURLButton";
import { POLICY_AGREEMENT_LINK } from "../../../constants";

const RulesScreen = () => {
  const [rules, setRules] = useState({} as RulesType);
  const {navigate} = useNavigation();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const rulesData = authService.getRules();
    if (rules) {
      setRules(rulesData);
    }
  }, [rules]);

  const onButtonPress = () => {
    if (isChecked) {
      navigate('app');
    } else {
      Alert.alert('Ознакомьтесь с политикой конфиденциальности');
    }
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_content}>
            Правила пользования приложением
          </Text>
        </View>
        <SafeAreaView>
          {rules.rulesData?.map(({id, content, title, icon}, index, arr) => {
            return (
              <RuleComponent
                title={title}
                content={content}
                id={id}
                icon={icon}
                isLastItem={index === arr.length - 1}
              />
            );
          })}
        </SafeAreaView>
      </ScrollView>
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
              Я соглашаюсь с <OpenURLButton url={POLICY_AGREEMENT_LINK}>Политикой Конфиденциальности и Условиями
              использования</OpenURLButton>
            </Text>
          </View>
        </View>
        <Pressable style={styles.button} onPress={onButtonPress}>
          <Text style={styles.button_content}>Я принимаю правила</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RulesScreen;
