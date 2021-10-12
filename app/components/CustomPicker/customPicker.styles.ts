import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 50,
    marginTop: 48,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    marginBottom: 4,
  },
  picker_wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(191, 191, 191, 0.5)',
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
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '60%',
    paddingRight: 17,
    alignItems: 'center',
  },
  placeholder: {
    color: '#828282',
  },
  error_message: {
    marginTop: 5,
    color: 'red',
    fontSize: 14,
    lineHeight: 18,
  },
});
