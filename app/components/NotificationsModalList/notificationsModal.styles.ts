import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: '#FFF',
  },
  notification_button_wrapper: {
    paddingTop: 17,
    paddingBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification_button: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#C63031',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
