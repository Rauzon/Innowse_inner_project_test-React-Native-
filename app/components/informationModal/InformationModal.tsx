import React, {memo, ReactNode} from 'react';
import {Pressable, View} from 'react-native';
import styles from './informationModal.styles';

interface IPlaceInfoModalProps {
  onModalClose(visibleModal: boolean): void;
  children: ReactNode;
}

const InformationModal = memo(
  ({onModalClose, children}: IPlaceInfoModalProps): JSX.Element => {
    return (
      <View style={styles.modal_wrapper}>
        <View style={styles.modal_inner}>
          <Pressable
            style={styles.close_btn}
            onPress={() => onModalClose(false)}>
            <View style={styles.close_line} />
            <View
              style={[styles.close_line, {transform: [{rotate: '-45deg'}]}]}
            />
          </Pressable>
          {children}
        </View>
      </View>
    );
  },
);

export default InformationModal;
