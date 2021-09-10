import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import RuleComponent from './components/RuleComponent';
import authService from '../../../services/auth/auth.service';
import {RulesType} from '../../../services/auth/auth.types';

interface IRulesProps {
  navigation: any;
}

const RulesScreen = memo(({navigation}: IRulesProps) => {
  const [rules, setRules] = useState({} as RulesType);

  useEffect(() => {
    const rulesData = authService.getRules();
    if (rules) {
      setRules(rulesData);
    }
  }, [rules]);

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
                key={id}
                title={title}
                content={content}
                icon={icon}
                isLastItem={index === arr.length - 1}
              />
            );
          })}
        </SafeAreaView>
      </ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => navigation?.navigate('app')}>
        <Text style={styles.button_content}>Я принимаю правила</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 19,
    marginLeft: 16,
    paddingRight: 16,
  },
  title: {
    width: 276,
    height: 52,
    marginBottom: 29,
  },
  title_content: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
    color: '#333333',
  },
  button: {
    width: 327,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 40,
    backgroundColor: '#C32D2C',
    borderRadius: 10,
  },
  button_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
});

export default RulesScreen;
