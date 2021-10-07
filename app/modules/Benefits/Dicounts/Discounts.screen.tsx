import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';
import CouponCard from './CouponCard/CouponCard';
import useGetBenefitsData from '../../../hooks/useGetBenefitsData';
import CustomAppHeader from '../../../components/CustomAppHeader/CustomAppHeader';
import {useTranslation} from 'react-i18next';
import {DiscountsDataType} from '../../../services/benefits/benefits.types';

interface IDiscounts {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const DiscountsScreen = memo(
  ({
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  }: IDiscounts): JSX.Element => {
    const {t} = useTranslation();
    const data = useGetBenefitsData();
    const discounts = data?.discounts;

    const header = () => (
      <CustomAppHeader
        rightBtnContent={t('TabsAndButtonsHeaders.referrals')}
        leftBtnContent={t('TabsAndButtonsHeaders.discounts')}
        isLeftButtonPressed={isLeftButtonPressed}
        isRightButtonPressed={isRightButtonPressed}
        pressRightButton={pressRightButton}
        pressLeftButton={pressLeftButton}
      />
    );

    const renderItem = ({item}: ListRenderItemInfo<DiscountsDataType>) => (
      <CouponCard key={item.id} item={item} />
    );

    return discounts ? (
      <FlatList
        data={discounts.discountsData}
        ListHeaderComponent={header}
        renderItem={renderItem}
      />
    ) : (
      <></>
    );
  },
);

export default DiscountsScreen;
