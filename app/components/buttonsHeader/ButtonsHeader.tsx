import React, {memo} from 'react';
import {FlatList, View, Text} from 'react-native';
import CustomTopButton from '../customTopButton/CustomTopButton';
import styles from './buttonsHeader.styles';
import {useTranslation} from 'react-i18next';

interface ICoupon {
  categories?: string[];
  onBtnPress?(btnContent: string): void;
  chosenCategory?: string;
  isBenefitsScreen?: boolean;
}

const ButtonsHeader = memo(
  ({
    categories,
    onBtnPress,
    chosenCategory,
    isBenefitsScreen,
  }: ICoupon): JSX.Element => {
    const {t} = useTranslation();
    return (
      <View style={styles.container}>
        {isBenefitsScreen && (
          <View style={styles.title_wrapper}>
            <Text style={styles.title}>
              {t('couponScreen.couponCardTitle')}
            </Text>
          </View>
        )}
        <FlatList
          data={categories}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            const indexElement = categories ? categories.length - 1 : 0;
            return (
              <CustomTopButton
                isFirstItem={index === 0}
                isLastItem={index === indexElement}
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
