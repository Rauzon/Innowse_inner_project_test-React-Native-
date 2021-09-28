import React, {useState} from 'react';
import {Image, ScrollView, View, Text, Modal, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './article.styles';
import useGetMetaData from '../../hooks/useGetMetaData';
import SubstanceList from '../substanceList/SubstanceList';
import ContentList from '../contentList/ContentList';
import VideoModal from '../videoModal/VideoModal';
import {PlayIcon} from '../../Icons';

const ArticleScreen = (): JSX.Element => {
  const {params} = useRoute();
  const {title, precontent, content, headers, videoId} = params;
  const metaData = useGetMetaData(videoId);
  const [modalVisible, setVisibleModal] = useState<boolean>(false);
  const posterUrl = metaData?.thumbnail_url;

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.poster_wrapper}
        onPress={() => setVisibleModal(true)}>
        <Image style={styles.poster} source={{uri: posterUrl}} />
        <View style={styles.play_icon_wrapper}>
          <PlayIcon />
        </View>
      </Pressable>
      <View style={styles.title_wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {precontent && (
        <View style={styles.precontent_wrapper}>
          <Text style={styles.precontent}>
            Мы предлагаем сотрудникам медицинское страхование (ДМС) от компании
            Asoba. Страхование доступно для сотрудников, которые прошли
            испытательный срок.
          </Text>
        </View>
      )}
      <SubstanceList headers={headers} />
      <ContentList content={content} />
      <Modal visible={modalVisible} transparent={true}>
        <VideoModal videoId={videoId} onClose={() => setVisibleModal(false)} />
      </Modal>
    </ScrollView>
  );
};

export default ArticleScreen;
