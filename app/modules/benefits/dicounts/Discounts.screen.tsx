import React, {memo} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import CouponCard from './couponCard/CouponCard';
import useGetBenefitsData from '../../../hooks/useGetBenefitsData';
import CustomAppHeader from '../../../components/customAppHeader/CustomAppHeader';
import {useTranslation} from 'react-i18next';

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

    return discounts ? (
      <FlatList
        data={discounts.discountsData}
        ListHeaderComponent={() => (
          <CustomAppHeader
            rightBtnContent={t('TabsAndButtonsHeaders.referrals')}
            leftBtnContent={t('TabsAndButtonsHeaders.discounts')}
            isLeftButtonPressed={isLeftButtonPressed}
            isRightButtonPressed={isRightButtonPressed}
            pressRightButton={pressRightButton}
            pressLeftButton={pressLeftButton}
          />
        )}
        renderItem={({item}) => <CouponCard key={item.id} item={item} />}
      />
    ) : (
      <></>
    );
  },
);

export default DiscountsScreen;
