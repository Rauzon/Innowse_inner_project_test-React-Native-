export interface UserType {
  name: string;
  surname: string;
  photoUrl: string | null | undefined;
  initials: string | null;
  email: string | null;
}

export interface IAuthState {
  user: UserType | null;
}

export type TransformNameType = Omit<UserType, 'photoUrl' | 'email'>;
