import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {ContactType} from '../../../../../services/benefits/benefits.types';
import styles from './contacts.styles';
import {useTranslation} from 'react-i18next';
import ContactItem from '../../../../../components/ContactItem/ContactItem';

interface IContacts {
  contacts: ContactType[];
}

const Contacts = memo(({contacts}: IContacts): JSX.Element => {
  const {t} = useTranslation('', {keyPrefix: 'referralsScreen.contacts'});
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{t('contactsDescription')}</Text>
      </View>
      <View style={styles.contacts_wrapper}>
        {contacts?.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </View>
    </View>
  );
});

export default Contacts;
