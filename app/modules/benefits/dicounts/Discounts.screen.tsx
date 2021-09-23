import React, {memo} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import CouponCard from './couponCard/CouponCard';
import useGetBenefitsData from '../../../hooks/useGetBenefitsData';
import CustomAppHeader from '../../../components/customAppHeader/CustomAppHeader';

interface IDiscountsProps {
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
  }: IDiscountsProps): JSX.Element => {
    const data = useGetBenefitsData();
    const discounts = data?.discounts;

    return discounts ? (
      <FlatList
        data={discounts.discountsData}
        ListHeaderComponent={() => (
          <CustomAppHeader
            rightBtnContent={'Рефералка'}
            leftBtnContent={'Скидки'}
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
