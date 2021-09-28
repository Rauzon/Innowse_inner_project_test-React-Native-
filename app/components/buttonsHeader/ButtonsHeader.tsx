import React, {memo} from 'react';
import {FlatList, View, Text} from 'react-native';
import {CategoriesType} from '../../services/benefits/benefits.types';
import CustomButton from '../customButton/CustomButton';
import styles from './buttonsHeader.styles';

interface ICouponProps {
  categories: CategoriesType[];
  onBtnPress(btnContent: string): void;
  chosenCategory: string;
}

const ButtonsHeader = memo(
  ({categories, onBtnPress, chosenCategory}: ICouponProps): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={styles.title_wrapper}>
          <Text style={styles.title}>Забирай свою скидку прямо сейчас!</Text>
        </View>
        <FlatList
          data={categories}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <CustomButton
                isFirstItem={index === 0}
                isLastItem={index === categories.length - 1}
                key={index}
                content={item}
                onBtnPress={onBtnPress}
                isPressed={chosenCategory === item}
              />
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  },
);

export default ButtonsHeader;
