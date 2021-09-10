import React from 'react';
import {StyleSheet, Image} from 'react-native';
import DefaultAvatar from '../../commonComponents/defaultAvatar/DefaultAvatar';

interface IAvatarComponentProps {
  initials?: string | null;
  photoUrl?: string | null;
}

const AvatarComponent = ({
  initials,
  photoUrl,
}: IAvatarComponentProps): JSX.Element => {
  return photoUrl ? (
    <Image style={styles.photo_avatar} source={{uri: photoUrl}} />
  ) : (
    <DefaultAvatar initials={initials} componentStyle={styles} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(195, 45, 44, 0.1)',
    borderRadius: 50,
  },
  content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    alignItems: 'center',
    textAlign: 'center',
    color: '#C32D2C',
    textTransform: 'uppercase',
  },
  photo_avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default AvatarComponent;
