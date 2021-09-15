import React, {memo, useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import RuleComponent from './components/RuleComponent';
import authService from '../../../services/auth/auth.service';
import {RulesType} from '../../../services/auth/auth.types';
import s from './rules.styles';

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
      <ScrollView style={s.container}>
        <View style={s.title}>
          <Text style={s.title_content}>Правила пользования приложением</Text>
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
      <Pressable style={s.button} onPress={() => navigation?.navigate('app')}>
        <Text style={s.button_content}>Я принимаю правила</Text>
      </Pressable>
    </View>
  );
});

export default RulesScreen;
