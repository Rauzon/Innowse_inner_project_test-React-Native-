import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';
import useGetHelpData from '../../../hooks/useGetHelpData';
import QuestionsList from './QuestionsList/QuestionsList';

interface IFaqScreen {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const FaqScreen = memo(
  ({
    pressLeftButton,
    pressRightButton,
    isLeftButtonPressed,
    isRightButtonPressed,
  }: IFaqScreen): JSX.Element => {
    const helpData = useGetHelpData();
    const faqData = helpData?.faq?.faqData;

    return (
      <View>
        <QuestionsList
          faqData={faqData}
          pressLeftButton={pressLeftButton}
          pressRightButton={pressRightButton}
          isRightButtonPressed={isRightButtonPressed}
          isLeftButtonPressed={isLeftButtonPressed}
        />
      </View>
    );
  },
);

export default FaqScreen;
