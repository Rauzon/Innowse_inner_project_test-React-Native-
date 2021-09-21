import React, {memo, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {PlaceDataType} from '../../../../../../services/benefits/benefits.types';
import styles from './contentModal.styles';

interface IContentModalProps {
  placeName: string;
  placeData: PlaceDataType;
}

const ContentModal = memo(
  ({placeName, placeData}: IContentModalProps): JSX.Element => {
    const {
      socials,
      address,
      phoneNumber,
      workTime: {workDays, weekend},
    } = placeData;
    const [socialsKeys, setSocialsKeys] = useState<string[]>([]);

    useEffect(() => {
      if (socials) {
        const keys = Object.keys(socials);
        setSocialsKeys(keys);
      }
    }, [socials]);

    return (
      <View>
        <Text style={styles.placeName}>{placeName}</Text>
        {address && <Text style={styles.text}>{address}</Text>}
        {phoneNumber && <Text style={styles.text}>{phoneNumber}</Text>}
        {workDays && (
          <Text style={styles.text}>
            ВС-ЧТ: {workDays?.start} - {workDays?.end}
          </Text>
        )}
        {weekend && (
          <Text style={styles.text}>
            ПТ-СБ: {weekend?.start} - {weekend?.end}
          </Text>
        )}
        {socials &&
          socialsKeys.map((item, index) => {
            return (
              <Text style={styles.text} key={index}>
                {item} {socials[item]}
              </Text>
            );
          })}
      </View>
    );
  },
);

export default ContentModal;
