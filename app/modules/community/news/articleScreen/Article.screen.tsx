import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {NewType} from '../../../../services/news/news.types';
import s from './article.styles';
import {NEWS_ICON_URL_DATA} from '../../../../constants';
import SubstanceList from './substanceList/SubstanceList';
import ContentList from './contentList/ContentList';

interface IArticleProps {
  item: NewType;
}

const ArticleScreen = memo(({item}: IArticleProps): JSX.Element => {
  const {content, icon, date, title, headers, preContent} = item;

  return (
    <ScrollView style={s.container}>
      <Image source={NEWS_ICON_URL_DATA[icon]} style={s.poster} />
      <View style={s.content_wrapper}>
        <View style={s.date_wrapper}>
          <Text style={s.date}>{date}</Text>
        </View>
        <View style={s.title_wrapper}>
          <Text style={s.title}>{title}</Text>
        </View>
        <SubstanceList headers={headers} />
        <ContentList content={content} preContent={preContent} />
      </View>
    </ScrollView>
  );
});

export default ArticleScreen;
