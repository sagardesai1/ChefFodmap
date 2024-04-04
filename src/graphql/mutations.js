/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createSubscriptions = /* GraphQL */ `
  mutation CreateSubscriptions(
    $input: CreateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    createSubscriptions(input: $input, condition: $condition) {
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
export const updateSubscriptions = /* GraphQL */ `
  mutation UpdateSubscriptions(
    $input: UpdateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    updateSubscriptions(input: $input, condition: $condition) {
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
export const deleteSubscriptions = /* GraphQL */ `
  mutation DeleteSubscriptions(
    $input: DeleteSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    deleteSubscriptions(input: $input, condition: $condition) {
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
