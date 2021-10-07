import React, {memo, useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import InformationModal from '../InformationModal/InformationModal';
import {ContactType} from '../../services/benefits/benefits.types';
import {useTranslation} from 'react-i18next';
import useTranslateItems from '../../hooks/useTranslateItems';
import styles from './contactItem.styles';

interface IContactItem {
  contact: ContactType;
}

const ContactItem = memo(({contact}: IContactItem): JSX.Element => {
  const {city, name, mail} = contact;
  const {t} = useTranslation('', {keyPrefix: 'referralsScreen.contacts'});
  const translatedCities = useTranslateItems({
    data: city,
    prefix: 'profileScreen',
  });
  const [modalVisible, setVisibleModal] = useState<boolean>(false);

  return (
    <View style={styles.contact_item}>
      <View style={styles.cities_wrapper}>
        <Text style={styles.cities}>{translatedCities.join(', ')}</Text>
      </View>
      <Pressable onPress={() => setVisibleModal(true)}>
        <Text style={styles.contact}>{t(`names.${name}`)}</Text>
      </Pressable>
      <Modal visible={modalVisible} transparent={true}>
        <InformationModal onModalClose={setVisibleModal}>
          <Text style={styles.name_modal}>{t(`names.${name}`)}</Text>
          <Text style={styles.city_modal}>{translatedCities.join(', ')}</Text>
          <Pressable>
            <Text style={styles.mail_modal}>{mail}</Text>
          </Pressable>
        </InformationModal>
      </Modal>
    </View>
  );
});

export default ContactItem;
