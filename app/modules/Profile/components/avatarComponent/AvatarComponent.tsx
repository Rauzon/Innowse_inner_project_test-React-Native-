import React from 'react';
import DefaultAvatar from '../../../commonComponents/defaultAvatar/DefaultAvatar';
import s from './avatarComponent.styles';
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
    <Image style={s.photo_avatar} source={{uri: photoUrl}} />
  ) : (
    <DefaultAvatar initials={initials} componentStyle={s} />
  );
};

export default AvatarComponent;
