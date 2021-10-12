import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo, View, ViewStyle} from 'react-native';
import {FaqType} from '../../../../services/help/help.types';
import QuestionItem from '../../helpComponents/QuestionItem/QuestionItem';
import CustomAppHeader from '../../../../components/CustomAppHeader/CustomAppHeader';
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

    const header = () => (
      <CustomAppHeader
        rightBtnContent={t('TabsAndButtonsHeaders.support')}
        leftBtnContent={t('TabsAndButtonsHeaders.faq')}
        isLeftButtonPressed={isLeftButtonPressed}
        isRightButtonPressed={isRightButtonPressed}
        pressRightButton={pressRightButton}
        pressLeftButton={pressLeftButton}
      />
    );

    const renderItem = ({item, index}: ListRenderItemInfo<FaqType>) => (
      <QuestionItem
        index={index}
        questionItem={item}
        key={item.id}
        isLastItem={index === faqData?.length! - 1}
      />
    );

    return (
      <View>
        <FlatList
          data={faqData}
          ListHeaderComponent={header}
          renderItem={renderItem}
        />
      </View>
    );
  },
);

export default QuestionsList;
