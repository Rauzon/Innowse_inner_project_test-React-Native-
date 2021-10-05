import React, {memo} from 'react';
import {FlatList, View, ViewStyle} from 'react-native';
import {FaqType} from '../../../../services/help/help.types';
import QuestionItem from './questionItem/QuestionItem';
import CustomAppHeader from '../../../../components/customAppHeader/CustomAppHeader';
import {useTranslation} from 'react-i18next';

interface IQuestionsList {
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
  }: IQuestionsList): JSX.Element => {
    const {t} = useTranslation();
    return (
      <View>
        <FlatList
          data={faqData}
          ListHeaderComponent={() => (
            <CustomAppHeader
              rightBtnContent={t('TabsAndButtonsHeaders.support')}
              leftBtnContent={t('TabsAndButtonsHeaders.faq')}
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
              isLastItem={index === faqData?.length! - 1}
            />
          )}
        />
      </View>
    );
  },
);

export default QuestionsList;
