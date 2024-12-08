export type UserType = {
  username?: string | null;
  email: string | null;
  password?: string | null;
};

export type ExtendedUserType = UserType & {
  id?: number;
  image?: string;
  token?: string;
  bio?: string;
};
