import gql from 'graphql-tag';

/**
 * @name currentUser
 * @input none
 * @response currentUser: Object
 */
export const CURRENT_USER_QUERY = gql`
query currentUserQuery {
  currentUser {
    email
  }
}`;

/**
 * @name signUp
 * @input {
 *   email: String!
 *   password: String!
 *   recaptchaToken: String!
 * }
 * @response token: Object
 */
export const SIGNUP_MUTATION = gql`
mutation SignUpMutation($input: SignUpInput!) {
  signUp(input: $input) {
    token {
      value
    }
  }
}`;

/**
 * @name login
 * @input {
 *   email: String!
 *   password: String!
 *   recaptchaToken: String!
 * }
 * @response token: Object
 */
export const LOGIN_MUTATION = gql`
mutation LoginMutation($input: LoginInput!) {
  login(input: $input) {
    token {
      value
    }
  }
}`;

/**
 * @name setBudget
 * @input {
 *   budget: Float!
 *   budgetCycle: Int!
 *   budgetCycleUnit: CycleUnit!
 * }
 * @response user: Object
 */
export const SET_BUDGET_MUTATION = gql`
mutation setBudgetMutation($input: SetBudgetInput!) {
  setBudget(input: $input) {
    user {
      email
    }
  }
}`;
