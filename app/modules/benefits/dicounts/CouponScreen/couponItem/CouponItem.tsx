import React, {memo, useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {
  CouponType,
  DiscountMetaDataType,
} from '../../../../../services/benefits/benefits.types';
import styles from './couponItem.styles';
import {DashedLineIcon} from '../../../../../Icons';
import InformationModal from '../../../../../components/informationModal/InformationModal';
import ContentModal from './contentModal/ContentModal';

interface ICouponItemProps {
  coupon: CouponType;
}

interface ICouponContentProps {
  placeName: string;
  data: DiscountMetaDataType;
}

const CouponItem = memo(({coupon}: ICouponItemProps): JSX.Element => {
  const {sizeOfDiscount, placeName, discountMetaData, placeData} = coupon;

  const [modalVisible, setModalVisible] = useState(false);

  const onModalClose = (value: boolean): void => {
    setModalVisible(value);
  };

  return (
    <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
      <View style={[styles.circle, styles.top]} />
      <View style={[styles.circle, styles.bottom]} />
      <CouponTitle sizeOfDiscount={sizeOfDiscount} />
      <CouponContent data={discountMetaData} placeName={placeName} />
      <Modal visible={modalVisible} transparent={true}>
        <InformationModal onModalClose={onModalClose}>
          <ContentModal placeData={placeData} placeName={placeName} />
        </InformationModal>
      </Modal>
    </Pressable>
  );
});

const CouponTitle = memo(
  ({sizeOfDiscount}: {sizeOfDiscount: string}): JSX.Element => {
    return (
      <View style={styles.countSize_wrapper}>
        <Text style={styles.countSize_text}>{sizeOfDiscount}</Text>
        <View style={styles.coupon_line_icon}>
          <DashedLineIcon />
        </View>
      </View>
    );
  },
);

const CouponContent = memo(
  ({placeName, data}: ICouponContentProps): JSX.Element => {
    const {condition, password, login, description} = data;
    return (
      <View style={styles.content_wrapper}>
        <Text style={styles.placeName}>{placeName}</Text>
        {condition && <Text style={styles.text}>{condition}</Text>}
        {login && (
          <Text style={styles.text}>
            Логин:<Text style={[styles.text, styles.bold_text]}> {login}</Text>
          </Text>
        )}
        {password && (
          <Text style={styles.text}>
            Пароль:
            <Text style={[styles.text, styles.bold_text]}> {password}</Text>
          </Text>
        )}
        {description && <Text style={styles.text}>{description}</Text>}
        <View style={styles.btn}>
          <Text style={styles.btn_content}>Подробнее</Text>
        </View>
      </View>
    );
  },
);

export default CouponItem;
