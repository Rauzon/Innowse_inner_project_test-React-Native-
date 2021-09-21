import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 46,
  },
  text_container: {
    marginTop: 5,
    marginBottom: 18,
  },
  text: {
    paddingRight: '10%',
  },
  contacts_wrapper: {
    flexDirection: 'column',
  },
  contact_item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cities_wrapper: {
    maxWidth: 180,
  },
  cities: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: '#353535',
  },
  contact: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#C63031',
  },
  city_modal: {
    marginTop: 4,
    marginBottom: 17,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: '#353535',
  },
  name_modal: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    color: '#353535',
  },
  mail_modal: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#C63031',
  },
});