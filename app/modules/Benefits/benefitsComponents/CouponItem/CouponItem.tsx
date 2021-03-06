import React, {memo, useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {
  CouponType,
  DiscountMetaDataType,
} from '../../../../services/benefits/benefits.types';
import styles from './couponItem.styles';
import {DashedLineIcon} from '../../../../Icons';
import InformationModal from '../../../../components/InformationModal/InformationModal';
import ContentModal from '../ContentModal/ContentModal';
import {useTranslation} from 'react-i18next';

interface ICouponItem {
  coupon: CouponType;
}

interface ICouponContent {
  placeName: string;
  data: DiscountMetaDataType;
}

const CouponItem = memo(({coupon}: ICouponItem): JSX.Element => {
  const {sizeOfDiscount, placeName, discountMetaData, placeData} = coupon;

  const [modalVisible, setModalVisible] = useState(false);

  const onModalClose = (value: boolean): void => {
    setModalVisible(value);
  };

  const onPressHandler = () => setModalVisible(true);

  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
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

const CouponContent = memo(({placeName, data}: ICouponContent): JSX.Element => {
  const {condition, password, login, description} = data;
  const {t} = useTranslation();
  return (
    <View style={styles.content_wrapper}>
      <Text style={styles.placeName}>{placeName}</Text>
      {condition && <Text style={styles.text}>{condition}</Text>}
      {login && (
        <Text style={styles.text}>
          ??????????:<Text style={[styles.text, styles.bold_text]}> {login}</Text>
        </Text>
      )}
      {password && (
        <Text style={styles.text}>
          ????????????:
          <Text style={[styles.text, styles.bold_text]}> {password}</Text>
        </Text>
      )}
      {description && <Text style={styles.text}>{description}</Text>}
      <View style={styles.btn}>
        <Text style={styles.btn_content}>{t('couponScreen.more')}</Text>
      </View>
    </View>
  );
});

export default CouponItem;
