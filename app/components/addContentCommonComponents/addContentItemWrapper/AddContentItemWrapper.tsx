import React, {memo, ReactNode} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import styles from './addContentItemWrapper.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigator/navigator.types';
import {ROUTES} from '../../../constants';

interface IAddContentItem {
  icon: ReactNode;
  children: JSX.Element;
  route: string;
  style?: ViewStyle | ViewStyle[];
}

type FoodMessageScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.FOOD_MESSAGE
>;

const AddContentItemWrapper = memo(
  ({icon, children, route, style}: IAddContentItem): JSX.Element => {
    const {navigate} = useNavigation<FoodMessageScreenProp>();

    const goToScreen = () => {
      navigate(route as never);
    };

    return (
      <Pressable style={[styles.container, style]} onPress={goToScreen}>
        <View style={styles.icon_wrapper}>{icon}</View>
        <View>{children}</View>
      </Pressable>
    );
  },
);

export default AddContentItemWrapper;
