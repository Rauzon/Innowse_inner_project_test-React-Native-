import React, {memo} from 'react';
import {FlatList, View, ViewStyle} from 'react-native';
import {FaqType} from '../../../../services/help/help.types';
import styles from './questionsList.styles';
import QuestionItem from './questionItem/QuestionItem';
import CustomAppHeader from '../../../../components/customAppHeader/CustomAppHeader';

interface IQuestionsListProps {
  faqData: FaqType[] | undefined;
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const QuestionsList = memo(
  ({
    faqData,
    isLeftButtonPressed,
    isRightButtonPressed,
    pressLeftButton,
    pressRightButton,
  }: IQuestionsListProps): JSX.Element => {
    return (
      <View style={styles.container}>
        <FlatList
          data={faqData}
          ListHeaderComponent={() => (
            <CustomAppHeader
              rightBtnContent={'Служба Поддержки'}
              leftBtnContent={'FAQ'}
              isLeftButtonPressed={isLeftButtonPressed}
              isRightButtonPressed={isRightButtonPressed}
              pressRightButton={pressRightButton}
              pressLeftButton={pressLeftButton}
            />
          )}
          renderItem={({item, index}) => (
            <QuestionItem
              questionItem={item}
              key={item.id}
              isLastItem={index === faqData?.length - 1}
            />
          )}
        />
      </View>
    );
  },
);

export default QuestionsList;
