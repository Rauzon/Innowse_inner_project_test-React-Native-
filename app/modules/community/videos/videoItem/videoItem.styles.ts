import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 6,
    height: 70,
    paddingRight: 16,
    paddingLeft: 16,
  },
  poster_wrapper: {
    width: 110,
    height: 70,
    position: 'relative',
    marginRight: 16,
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  poster_playIcon: {
    width: 17,
    height: 17,
    zIndex: 9999,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '37.5%',
  },
  content_wrapper: {
    justifyContent: 'center',
  },
  wrapper_title: {
    // width: '85%',
    flexDirection: 'row',
    marginBottom: 4,
  },
  title: {
    flexShrink: 1,
    flexWrap: 'wrap',
    flexBasis: 270,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    color: '#333333',
  },
  wrapper_date: {
    //
  },
  date: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 17,
    color: '#828282',
  },
});
