import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: -5,
  },
  poster: {
    width: '100%',
    height: 200,
  },
  content_wrapper: {
    // paddingTop: 18,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingBottom: 18,
  },
  date_wrapper: {
    width: '100%',
    paddingTop: 18,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 6,
  },
  date: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#828282',
    marginBottom: 6,
  },
  title_wrapper: {
    width: '100%',
    height: 90,
    paddingRight: 16,
    paddingLeft: 16,
  },
  title: {
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    color: '#333333',
    marginBottom: 6,
  },
});
