import React, {memo} from 'react';
import {FlatList, View, Text, ListRenderItemInfo} from 'react-native';
import CustomTopButton from '../CustomTopButton/CustomTopButton';
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

    const renderItem = ({item, index}: ListRenderItemInfo<string>) => {
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
    };

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
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </View>
    );
  },
);

export default ButtonsHeader;
