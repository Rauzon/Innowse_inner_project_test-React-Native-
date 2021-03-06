import React, {memo} from 'react';
import {FlatList, Image, ListRenderItemInfo, Text, View} from 'react-native';
import styles from './contentList.styles';
import ContentItem from '../../../../components/ContentItem/ContentItem';
import {NEWS_ICON_URL_DATA} from '../../../../constants';
import SubstanceList from '../../../../components/SubstanceList/SubstanceList';
import {
  NewContentItemType,
  NewType,
} from '../../../../services/news/news.types';

interface IContentList {
  newContent: NewType;
}

const ContentList = memo(({newContent}: IContentList): JSX.Element => {
  const {content, icon, date, title, headers, preContent} = newContent;

  const header = () => (
    <>
      <Image source={NEWS_ICON_URL_DATA[icon]} style={styles.poster} />
      <View style={styles.date_wrapper}>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.title_wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <SubstanceList headers={headers} />
      {preContent ? (
        <View style={styles.precontent_wrapper}>
          <Text>{preContent}</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<NewContentItemType>) => {
    return (
      <ContentItem
        isFirstItem={index === 0}
        key={index}
        subtitle={item.subtitle}
        text={item.text}
      />
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={header}
        data={content}
        renderItem={renderItem}
      />
    </View>
  );
});

export default ContentList;
