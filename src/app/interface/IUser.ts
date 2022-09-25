export interface IUser {
  email: string;
  phone_number: string;
  password: string;
  role: string;
}

export interface IAuthParams {
  login: string;
  password: string;
}
