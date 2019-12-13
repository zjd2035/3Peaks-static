import gql from 'graphql-tag';

export const INCREMENT_STAT_MUTATION = gql`
mutation IncrementStatMutation($type: String!, $group: String, $segment: String) {
  incrementStat(type: $type, group: $group, segment: $segment){
    id
    type
    group
    segment
    count
  }
}`;

export const DECREMENT_STAT_MUTATION = gql`
mutation DecrementStatMutation($type: String!, $group: String, $segment: String) {
  decrementStat(type: $type, group: $group, segment: $segment){
    id
    type
    group
    segment
    count
  }
}`;
