import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 120,
    marginBottom: 8,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  content_wrapper: {
    marginBottom: 17,
    marginLeft: 18,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    color: '#333333',
    letterSpacing: 0.25,
  },
  description: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#828282',
    letterSpacing: 0.25,
    marginTop: 3,
  },
  img: {
    borderRadius: 10,
  },
});
