import { gql } from '@apollo/client/core';

export const createSignInUserQuery = gql`
  query SignInUser($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      customer {
        firstName
        lastName
        email
        username
        isVerified
      }
      token
    }
  }
`;

export const createSignUpMutation = gql`
  mutation RegisterUser($username: String!, $password: String!, $email: String!) {
    register(email: $email, username: $username, password: $password) {
      customer {
        firstName
        lastName
        email
        username
        isVerified
      }
      token
    }
  }
`;

export const logoutMutation = gql`
  mutation {
    logout
  }
`;

export const createVerificationMutation = gql`
  mutation VerifyEmail($email: String!, $code: String!) {
    verifyEmail(email: $email, code: $code) {
      customer {
        firstName
        lastName
        email
        username
        isVerified
      }
      token
    }
  }
`;

export const resendVerifyEmailQuery = gql`
  query ResendVerifyEmail {
    resendVerifyEmail {
      code
      message
    }
  }
`;
