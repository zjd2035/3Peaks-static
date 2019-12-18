import gql from 'graphql-tag';

/**
 * @name incrementStat
 * @input {
 *   type: String!
 *   group: String
 *   segment: String
 * }
 * @response stat: Object
 */
export const INCREMENT_STAT_MUTATION = gql`
mutation IncrementStatMutation($input: IncrementStatInput!) {
  incrementStat(input: $input){
    stat {
      count
    }
  }
}`;

/**
 * @name decrementStat
 * @input {
 *   type: String!
 *   group: String
 *   segment: String
 * }
 * @response stat: Object
 */
export const DECREMENT_STAT_MUTATION = gql`
mutation DecrementStatMutation($input: DecrementStatInput!) {
  decrementStat(input: $input){
    stat {
      count
    }
  }
}`;
