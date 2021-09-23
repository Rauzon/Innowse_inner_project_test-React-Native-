import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    minWidth: 327,
    minHeight: 170,
    position: 'relative',
  },
  poster_wrapper: {
    minWidth: 327,
    minHeight: 170,
  },
  poster_playIcon: {
    position: 'absolute',
    width: 24,
    height: 32,
    zIndex: 9999,
    alignSelf: 'center',
    top: '50%',
    transform: [{translateY: -15}],
  },
  poster: {
    minWidth: 327,
    minHeight: 170,
    borderRadius: 10,
    position: 'relative',
  },
  content_wrapper: {
    maxWidth: 310,
    height: 65,
    position: 'absolute',
    top: 100,
  },
  title: {
    minHeight: 50,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 17,
    left: 17,
  },
  date: {
    color: '#FFFFFF',
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 17,
    left: 17,
  },
});
