/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateSubscriptions = /* GraphQL */ `
  subscription OnCreateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onCreateSubscriptions(filter: $filter) {
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
export const onUpdateSubscriptions = /* GraphQL */ `
  subscription OnUpdateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onUpdateSubscriptions(filter: $filter) {
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
export const onDeleteSubscriptions = /* GraphQL */ `
  subscription OnDeleteSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onDeleteSubscriptions(filter: $filter) {
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
