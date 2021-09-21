import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  poster_wrapper: {
    width: '100%',
    height: 375,
    position: 'relative',
  },
  poster: {
    height: 375,
  },
  play_icon_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_wrapper: {
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 28,
    color: '#353535',
  },
  precontent_wrapper: {
    margin: 16,
    paddingRight: '5%',
  },
  precontent: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#353535',
  },
});
