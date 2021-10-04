import React, {memo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './articleHeader.styles';
import {PlayIcon} from '../../Icons';

interface IArticleHeader {
  onSetOpenVideoNodal(isVisible: boolean): void;
  posterUrl?: string;
  title: string;
  precontent?: string;
}

const ArticleHeader = memo(
  ({
    onSetOpenVideoNodal,
    posterUrl,
    title,
    precontent,
  }: IArticleHeader): JSX.Element => {
    return (
      <>
        <Pressable
          style={styles.poster_wrapper}
          onPress={() => onSetOpenVideoNodal(true)}>
          <Image style={styles.poster} source={{uri: posterUrl}} />
          <View style={styles.play_icon_wrapper}>
            <PlayIcon />
          </View>
        </Pressable>
        <View style={styles.title_wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {precontent ? (
          <View style={styles.precontent_wrapper}>
            <Text style={styles.precontent}>
              Мы предлагаем сотрудникам медицинское страхование (ДМС) от
              компании Asoba. Страхование доступно для сотрудников, которые
              прошли испытательный срок.
            </Text>
          </View>
        ) : (
          <></>
        )}
      </>
    );
  },
);

export default ArticleHeader;
