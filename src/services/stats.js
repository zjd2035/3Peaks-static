import gql from 'graphql-tag';

export const INCREMENT_STAT_MUTATION = gql`
mutation IncrementStatMutation($input: IncrementStatInput!) {
  incrementStat(input: $input){
    stat {
      id
      type
      group
      segment
      count
    }
  }
}`;

export const DECREMENT_STAT_MUTATION = gql`
mutation DecrementStatMutation($input: DecrementStatInput!) {
  decrementStat(input: $input){
    stat {
      id
      type
      group
      segment
      count
    }
  }
}`;
