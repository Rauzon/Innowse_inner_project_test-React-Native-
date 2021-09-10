import {BehaviorSubject, Observable, of} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {StorageKeys} from '@shared/constants/storage-keys.constants';
import {storageService} from '../storage/storage.service';
import {
  AuthenticationStrategy,
  AuthResult,
  ResendVerifyEmail,
} from './auth.types';
import {BasicAuthenticationStrategy} from './strategies/basic-authentication.strategy';
import {userService} from '../user/user.service';

const {setStorageItem, getStorageItem, removeStorageItem} = storageService;

const {userData$, getAuthUserInfo} = userService;

/*
  Authentication service
*/
class AuthService {
  public authenticationState$: BehaviorSubject<string | null> =
    new BehaviorSubject<string>(getStorageItem(StorageKeys.Token));

  public constructor(private strategy: AuthenticationStrategy) {
    this.loginUser = this.loginUser.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
    this.logout = this.logout.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.resendVerifyEmail = this.resendVerifyEmail.bind(this);
    this.authenticationState$.subscribe(data => {
      if (data) {
        setStorageItem(StorageKeys.Token, data);
      } else {
        removeStorageItem(StorageKeys.Token);
      }
      /* TODO move in separate service */
      if (data) {
        getAuthUserInfo().subscribe();
      }
    });
  }

  public resendVerifyEmail(): Observable<ResendVerifyEmail> {
    return this.strategy.resendVerifyEmail();
  }

  public verifyEmail(email: string, code: string): Observable<AuthResult> {
    return this.strategy.verifyEmail({email, code}).pipe(
      filter(response => Boolean(response)),
      tap(response => {
        const {token, customer} = response;
        this.authenticationState$.next(token);
        userData$.next(customer);
      }),
    );
  }

  public loginUser(
    emailOrUsername: string,
    password: string,
  ): Observable<AuthResult> {
    if (this.authenticationState$.getValue()) {
      throw new Error('User is already authenticated');
    }

    return this.strategy.login({emailOrUsername, password}).pipe(
      tap(({customer, token}) => {
        this.authenticationState$.next(token);
        userData$.next(customer);
      }),
    );
  }

  public signUpUser(
    username: string,
    email: string,
    password: string,
  ): Observable<AuthResult> {
    if (this.authenticationState$.getValue()) {
      throw new Error('User is already authenticated');
    }

    return this.strategy.signUp({username, email, password}).pipe(
      filter(response => Boolean(response)),
      tap(response => {
        const {customer, token} = response;
        this.authenticationState$.next(token);
        userData$.next(customer);
      }),
    );
  }

  public logout(): Observable<void> {
    if (!this.authenticationState$.getValue()) {
      throw new Error('User is not authorized yet');
    }

    if (this.strategy && this.strategy.logout) {
      return this.strategy.logout().pipe(
        tap(() => {
          removeStorageItem(StorageKeys.Token);
          this.authenticationState$.next(null);
          userData$.next(null);
        }),
      );
    }
    return of();
  }
}

const authenticationStrategy = new BasicAuthenticationStrategy();

export const authService = new AuthService(authenticationStrategy);

export function useAuthService(): AuthService {
  return authService;
}
