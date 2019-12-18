import gql from 'graphql-tag';

/**
 * @name transactionQuery
 * @input {
 *   id: ID!
 * }
 * @response transaction: Object
 */
export const TRANSACTION_QUERY = gql`
query transactionQuery($id: ID) {
  transaction(id: $id) {
    id
    amount
    category {
      id
      name
    }
  }
}`;


/**
 * @name transactionsQuery
 * @input none
 * @response transactions: [ Object ]
 */
export const TRANSACTIONS_QUERY = gql`
query transactionsQuery {
  transactions {
    id
    amount
    category {
      id
      name
    }
  }
}`;

/**
 * @name createTransaction
 * @input {
 *   amount: Float!
 *   categoryId: ID
 * }
 * @response transaction: Object
 */
export const CREATE_TRANSACTION_MUTATION = gql`
mutation CreateTransactionMutation($input: CreateTransactionInput!) {
  createTransaction(input: $input) {
    transaction {
      id
      amount
      category {
        name
      }
    }
  }
}`;

/**
 * @name updateTransaction
 * @input {
 *   id: ID!
 *   amount: Float
 *   categoryId: ID
 * }
 * @response transaction: Object
 */
export const UPDATE_TRANSACTION_MUTATION = gql`
mutation UpdateTransactionMutation($input: UpdateTransactionInput!) {
  updateTransaction(input: $input) {
    transaction {
      id
      amount
      category {
        name
      }
    }
  }
}`;
