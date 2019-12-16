import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
query currentUserQuery {
  currentUser {
    email
  }
}`;

export const SIGNUP_MUTATION = gql`
mutation SignUpMutation($input: SignUpInput!) {
  signUp(input: $input) {
    token {
      value
    }
  }
}`;

export const LOGIN_MUTATION = gql`
mutation LoginMutation($input: LoginInput!) {
  login(input: $input) {
    token {
      value
    }
  }
}`;

export const SET_BUDGET_MUTATION = gql`
mutation setBudgetMutation($input: SetBudgetInput!) {
  setBudget(input: $input) {
    user {
      email
    }
  }
}`;
