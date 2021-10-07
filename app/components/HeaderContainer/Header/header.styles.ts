import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingTop: 6,
    paddingBottom: 2,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
  },
  logo: {
    width: 100,
    height: 14,
    position: 'relative',
  },
  container_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification_wrapper: {
    marginRight: 18,
  },
  unreadMessage_icon: {
    position: 'absolute',
    backgroundColor: '#C63031',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 3,
    paddingTop: 3,
    borderRadius: 50,
    top: -3.5,
    right: -7.5,
  },
  unreadMessage_icon_content: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 12,
    color: '#FFFFFF',
  },
  avatar_icon: {
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  button_wrapper: {
    padding: 9,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(195, 45, 44, 0.1)',
  },
  content: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 20,
    color: '#C32D2C',
  },
});
