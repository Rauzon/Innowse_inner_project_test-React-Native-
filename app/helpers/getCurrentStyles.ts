import s from '../components/customAppHeader/customAppHeader.styles';

const getCurrentStyles = (isPressed: boolean) => {
  return [{backgroundColor: isPressed ? '#C32D2C' : '#f3f3f3'}, s.button];
};

export default getCurrentStyles;
