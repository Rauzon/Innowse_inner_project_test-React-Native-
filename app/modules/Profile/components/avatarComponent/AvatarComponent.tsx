import React from 'react';
import DefaultAvatar from '../../../../components/defaultAvatar/DefaultAvatar';
import styles from './avatarComponent.styles';
import {Image} from 'react-native';

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

export default AvatarComponent;
