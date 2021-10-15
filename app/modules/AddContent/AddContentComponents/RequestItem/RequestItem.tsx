import React, {memo, ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from './requestItem.styles';

interface IRequestItem {
  icon: ReactNode;
}

const RequestItem = memo(({icon}: IRequestItem): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.content_wrapper}>
        <Text style={styles.date}>15 october 2021</Text>
        <Text style={styles.title}>Sick day - 1 day</Text>
        <Text style={styles.request_info}>
          You requested it 18th on the august
        </Text>
      </View>
      <View style={styles.status_wrapper}>
        <View style={styles.status_inner}>
          <Text style={styles.status_text}>Status in Progress</Text>
          <View>{icon}</View>
        </View>
      </View>
    </View>
  );
});

export default RequestItem;
