import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './article.styles';
import {NEWS_ICON_URL_DATA} from '../../../../constants';
import SubstanceList from '../../../../components/substanceList/SubstanceList';
import ContentList from '../../../../components/contentList/ContentList';
import {useRoute} from '@react-navigation/native';

const ArticleScreen = (): JSX.Element => {
  const {params} = useRoute();
  const {content, icon, date, title, headers, preContent} = params;

  return (
    <ScrollView style={styles.container}>
      <Image source={NEWS_ICON_URL_DATA[icon]} style={styles.poster} />
      <View style={styles.content_wrapper}>
        <View style={styles.date_wrapper}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.title_wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <SubstanceList headers={headers} />
        <ContentList content={content} preContent={preContent} />
      </View>
    </ScrollView>
  );
};

export default ArticleScreen;
