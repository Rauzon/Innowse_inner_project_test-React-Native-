import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/user/customer.interface';

export interface AuthResult {
  customer: Customer;
  token: string;
}

export interface LoginResult {
  login: AuthResult;
}

export interface RegistrationResult {
  register: AuthResult;
}

export interface VerificationResult {
  verifyEmail: AuthResult;
}

export interface ResendVerifyEmail {
  code: number;
  message: string;
}

export interface ResendVerifyEmailResult {
  resendVerifyEmail: ResendVerifyEmail;
}

export interface LoginPayload {
  emailOrUsername: string;
  password: string;
}

export interface SignUpPayload {
  username: string;
  password: string;
  email: string;
}

export interface VerificationPayload {
  email: string;
  code: string;
}

export interface AuthenticationStrategy {
  login: (payload: LoginPayload) => Observable<AuthResult>;
  signUp: (payload: SignUpPayload) => Observable<AuthResult>;
  verifyEmail: (payload: VerificationPayload) => Observable<AuthResult>;
  resendVerifyEmail: () => Observable<ResendVerifyEmail>;
  logout?: () => Observable<void | null>;
}
