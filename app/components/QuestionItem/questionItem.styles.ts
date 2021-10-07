import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    marginRight: 16,
    marginBottom: 16,
    marginTop: 8,
    marginLeft: 16,
    paddingLeft: 10,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    borderStyle: 'solid',
  },
  img_wrapper: {
    //
  },
  img: {},
  content_wrapper: {
    paddingRight: '25%',
    marginLeft: 25,
    marginTop: 4,
  },
  content_title: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#333333',
  },
  content: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 17,
    color: '#828282',
  },
  without_bottom_border: {
    borderBottomWidth: 0,
  },
});
