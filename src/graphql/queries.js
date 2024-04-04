/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      username
      Subscriptions {
        id
        customer_id
        subscription_id
        subscription_status
        usersID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubscriptions = /* GraphQL */ `
  query GetSubscriptions($id: ID!) {
    getSubscriptions(id: $id) {
      id
      customer_id
      subscription_id
      subscription_status
      usersID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customer_id
        subscription_id
        subscription_status
        usersID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const subscriptionsByUsersID = /* GraphQL */ `
  query SubscriptionsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subscriptionsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customer_id
        subscription_id
        subscription_status
        usersID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
