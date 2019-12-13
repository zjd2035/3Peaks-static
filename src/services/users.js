import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
query currentUserQuery {
  currentUser {
    email
    firstName
    lastName
  }
}`;

export const SIGNUP_MUTATION = gql`
mutation SignUpMutation($email: String!, $password: String!, $recaptchaToken: String!) {
  signUp(email: $email, password: $password, firstName: $firstName, lastName: $lastName, recaptchaToken: $recaptchaToken) {
    token
  }
}`;

export const LOGIN_MUTATION = gql`
mutation LoginMutation($email: String!, $password: String!, $recaptchaToken: String!) {
  login(email: $email, password: $password, recaptchaToken: $recaptchaToken) {
    token
  }
}`;
