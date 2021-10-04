import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './referralsSchemaItem.styles';
import {RecommendationSchemaType} from '../../../../../services/benefits/benefits.types';

interface IReferralsSchemaItem {
  items: RecommendationSchemaType[] | undefined;
}

const ReferralsSchemaItem = memo(
  ({items}: IReferralsSchemaItem): JSX.Element => {
    return (
      <View style={styles.container}>
        {items?.map(({id, position, bonus}) => {
          return (
            <View key={id} style={styles.item_wrapper}>
              <Text style={styles.bonus}>{bonus}</Text>
              <Text style={styles.position}>{position}</Text>
            </View>
          );
        })}
      </View>
    );
  },
);

export default ReferralsSchemaItem;
