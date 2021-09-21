import React, {memo, useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import {ContactType} from '../../../../../services/benefits/benefits.types';
import styles from './contacts.styles';
import InformationModal from '../../../../../components/informationModal/InformationModal';

interface IContactsProps {
  contacts: ContactType[] | undefined;
}

const Contacts = memo(({contacts}: IContactsProps): JSX.Element => {
  const [modalVisible, setVisibleModal] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          Напишите письмо с контактами кандидата рекрутеру в вашем городе
        </Text>
      </View>
      <View style={styles.contacts_wrapper}>
        {contacts?.map(({id, city, name, mail}) => {
          return (
            <View key={id} style={styles.contact_item}>
              <View style={styles.cities_wrapper}>
                <Text style={styles.cities}>{city.join(', ')}</Text>
              </View>
              <Pressable onPress={() => setVisibleModal(true)}>
                <Text style={styles.contact}>{name}</Text>
              </Pressable>
              <Modal visible={modalVisible} transparent={true}>
                <InformationModal onModalClose={setVisibleModal}>
                  <Text style={styles.name_modal}>{name}</Text>
                  <Text style={styles.city_modal}>{city.join(', ')}</Text>
                  <Pressable>
                    <Text style={styles.mail_modal}>{mail}</Text>
                  </Pressable>
                </InformationModal>
              </Modal>
            </View>
          );
        })}
      </View>
    </View>
  );
});

export default Contacts;
