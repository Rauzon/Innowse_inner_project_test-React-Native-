import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './faq.styles';
import useGetHelpData from '../../../hooks/useGetHelpData';
import QuestionsList from './questionsList/QuestionsList';

interface IFaqScreenProps {
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
  }: IFaqScreenProps): JSX.Element => {
    const helpData = useGetHelpData();
    const faqData = helpData?.faq?.faqData;

    return (
      <View style={styles.container}>
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
