import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rule_block: {
    width: 343,
    height: 201,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    borderStyle: 'solid',
    marginBottom: 24,
  },
  rule_block_without_border: {
    borderBottomWidth: 0,
  },
  image_block: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 8,
    marginBottom: 5,
    fontSize: 18,
    lineHeight: 33,
    letterSpacing: 0.25,
  },
  content: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: '#828282',
  },
});
