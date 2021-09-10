import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 370,
    height: 115,
    margin: 16,
  },
  avatar__block: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  content__block: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  logout__button: {
    width: 118,
    height: 42,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C32D2C',
    borderRadius: 10,
  },
  logout__button_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
  content__block_name: {
    paddingTop: 20,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
  },
  content__block_email: {
    marginTop: 4,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#828282',
  },
});
