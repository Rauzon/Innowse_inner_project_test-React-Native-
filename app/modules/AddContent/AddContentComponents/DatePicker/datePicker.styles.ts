import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 24,
  },
  picker_wrapper: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(191, 191, 191, 0.5)',
    position: 'relative',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
  },
  icon_wrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 17,
    right: 0,
    paddingTop: 14,
  },
  label_wrapper: {
    marginBottom: 4,
  },
  label: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.25,
    color: '#353535',
  },
  error: {
    marginTop: 4,
    color: 'red',
  },
});
