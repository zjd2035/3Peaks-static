import gql from 'graphql-tag';

/**
 * @name categoryQuery
 * @input {
 *   id: ID!
 * }
 * @response category: Object
 */
export const CATEGORY_QUERY = gql`
query categoryQuery($id: ID) {
  category(id: $id) {
    id
    name
    transactions {
      id
      amount
    }
  }
}`;


/**
 * @name categoriesQuery
 * @input none
 * @response categories: [ Object ]
 */
export const CATEGORIES_QUERY = gql`
query categoriesQuery {
  categories {
    id
    name
    transactions {
      id
      amount
    }
  }
}`;

/**
 * @name createCategory
 * @input {
 *   name: String!
 * }
 * @response category: Object
 */
export const CREATE_CATEGORY_MUTATION = gql`
mutation CreateCategoryMutation($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    category {
      id
      name
    }
  }
}`;

/**
 * @name updateCategory
 * @input {
 *   id: ID!
 *   amount: Float
 *   categoryId: ID
 * }
 * @response category: Object
 */
export const UPDATE_CATEGORY_MUTATION = gql`
mutation UpdateCategoryMutation($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    category {
      id
      amount
    }
  }
}`;
