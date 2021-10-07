import React, {memo, ReactNode} from 'react';
import {Pressable, View} from 'react-native';
import styles from './informationModal.styles';

interface IPlaceInfoModal {
  onModalClose(visibleModal: boolean): void;
  children: ReactNode;
}

const InformationModal = memo(
  ({onModalClose, children}: IPlaceInfoModal): JSX.Element => {
    const onPressHandler = () => onModalClose(false);

    return (
      <View style={styles.modal_wrapper}>
        <View style={styles.modal_inner}>
          <Pressable style={styles.close_btn} onPress={onPressHandler}>
            <View style={styles.close_line} />
            <View style={[styles.close_line, styles.close_line_roted]} />
          </Pressable>
          {children}
        </View>
      </View>
    );
  },
);

export default InformationModal;
