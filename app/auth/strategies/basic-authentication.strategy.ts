import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {
  AuthenticationStrategy,
  AuthResult,
  LoginPayload,
  LoginResult,
  RegistrationResult,
  ResendVerifyEmail,
  ResendVerifyEmailResult,
  SignUpPayload,
  VerificationPayload,
  VerificationResult,
} from '../auth.types';
import {
  createSignInUserQuery,
  createSignUpMutation,
  createVerificationMutation,
  resendVerifyEmailQuery,
  logoutMutation,
} from '../auth.queries';
import {apolloClientService} from '../../apollo-client/apollo-client.service';

export class BasicAuthenticationStrategy implements AuthenticationStrategy {
  public username: string = null;
  public password: string = null;

  public login({
    emailOrUsername,
    password,
  }: LoginPayload): Observable<AuthResult> {
    return apolloClientService
      .query<LoginResult>(
        {
          query: createSignInUserQuery,
          fetchPolicy: 'network-only',
          variables: {
            login: emailOrUsername,
            password: password,
          },
        },
        {
          interceptError: false,
        },
      )
      .pipe(map(data => data.login));
  }

  public signUp({
    password,
    username,
    email,
  }: SignUpPayload): Observable<AuthResult> {
    return apolloClientService
      .mutate<RegistrationResult>(
        {
          mutation: createSignUpMutation,
          variables: {
            username: username,
            email: email,
            password: password,
          },
        },
        {
          interceptError: false,
        },
      )
      .pipe(map(data => data.register));
  }

  public verifyEmail({
    code,
    email,
  }: VerificationPayload): Observable<AuthResult> {
    return apolloClientService
      .mutate<VerificationResult>({
        mutation: createVerificationMutation,
        variables: {
          email: email,
          code: code,
        },
      })
      .pipe(map(data => data.verifyEmail));
  }

  public resendVerifyEmail(): Observable<ResendVerifyEmail> {
    return apolloClientService
      .query<ResendVerifyEmailResult>({
        query: resendVerifyEmailQuery,
        fetchPolicy: 'network-only',
      })
      .pipe(map(data => data.resendVerifyEmail));
  }

  public logout(): Observable<void> {
    return apolloClientService.mutate<void>({
      mutation: logoutMutation,
    });
  }
}
