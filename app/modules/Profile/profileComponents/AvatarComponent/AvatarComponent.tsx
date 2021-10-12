import React, {memo} from 'react';
import DefaultAvatar from '../../../../components/DefaultAvatar/DefaultAvatar';
import styles from './avatarComponent.styles';
import {Image} from 'react-native';

interface IAvatarComponent {
  initials?: string | null;
  photoUrl?: string | null;
}

const AvatarComponent = memo(
  ({initials, photoUrl}: IAvatarComponent): JSX.Element => {
    return photoUrl ? (
      <Image style={styles.photo_avatar} source={{uri: photoUrl}} />
    ) : (
      <DefaultAvatar initials={initials} componentStyle={styles} />
    );
  },
);

export default AvatarComponent;
