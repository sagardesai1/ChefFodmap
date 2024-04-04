import { default as fetch, Request } from 'node-fetch';
import Stripe from 'stripe';
const GRAPHQL_ENDPOINT = process.env.TRIGGERSAI_GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.TRIGGERSAI_GRAPHQL_API_KEY;

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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
    //const req = new AWS.HttpRequest(appsyncUrl, region);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const body = JSON.parse(event.body);
    console.log(event)

    // Handle the event
    switch (body.type) {
        case 'customer.created':
            try {
                const customerCreatedEvent = body.data.object;
                const customerEmail = customerCreatedEvent.email;
                const newCustomerId = customerCreatedEvent.id;

                // Query Users table to get user associated with the email
                const usersQuery = {
                    query: usersByUsername,
                    variables: { username: customerEmail },
                };

                const usersResponse = await fetchGraphQL(usersQuery);

                if (!usersResponse.errors) {
                    // User found, proceed with the update
                    const userId = usersResponse.data.usersByUsername.items[0].id;

                    // Query subscriptions based on usersID
                    const subscriptionsQuery = {
                        query: subscriptionsByUsersID,
                        variables: { usersID: userId }, // Pass the userId obtained from the usersByUsername query
                    };

                    const subscriptionsResponse = await fetchGraphQL(subscriptionsQuery);

                    if (!subscriptionsResponse.errors && subscriptionsResponse.data.subscriptionsByUsersID.items.length > 0) {
                        // Subscription found, proceed with the update
                        const subscriptionId = subscriptionsResponse.data.subscriptionsByUsersID.items[0].id; // Assuming there's only one subscription per user

                        const updateVariables = {
                            input: {
                                id: subscriptionId,
                                customer_id: newCustomerId,
                            },
                        };
                        const updateSubscriptionQuery = {
                            query: updateSubscriptions,
                            variables: updateVariables,
                        };

                        await fetchGraphQL(updateSubscriptionQuery);
                        console.log('New Customer has been added to the database');
                    } else {
                        console.log('Subscription not found for the given user ID');
                    }
                }
            } catch (error) {
                console.error('Error processing customer.created event:', error);
                return createErrorResponse(error);
            }
            break;
        case 'customer.subscription.created':
            try {
                // Extract relevant information from the event
                const customerSubscriptionCreated = body.data.object;
                const subscriptionCreatedId = customerSubscriptionCreated.id;
                const customerCreatedId = customerSubscriptionCreated.customer;
                const statusCreated = customerSubscriptionCreated.status;

                const customerReponse = await stripe.customers.retrieve(customerCreatedId);
                // Query Users table to get user associated with the email
                const usersQuery = {
                    query: usersByUsername,
                    variables: { username: customerReponse.email },
                };

                const usersResponse = await fetchGraphQL(usersQuery);
                
                if (!usersResponse.errors) {
                    // User found, proceed with the update
                    const userId = usersResponse.data.usersByUsername.items[0].id;

                    // Query subscriptions to get the subscription belonging to the customer
                    const subscriptionsQuery = {
                        query: listSubscriptions,
                        variables: {
                            filter: { usersID: { eq: userId } }, // Filter subscriptions by user_id
                        },
                    };
            
                    const subscriptionsResponse = await fetchGraphQL(subscriptionsQuery);
            
                    if (!subscriptionsResponse.errors && subscriptionsResponse.data.listSubscriptions.items.length > 0) {
                        // Subscription found, proceed with the update
                        const subscriptionId = subscriptionsResponse.data.listSubscriptions.items[0].id;

                        const updateVariables = {
                            input: {
                                id: subscriptionId, // Include the subscription ID in the input
                                subscription_id: subscriptionCreatedId,
                                subscription_status: statusCreated,
                            },
                        };
            
                        const updateSubscriptionQuery = {
                            query: updateSubscriptions,
                            variables: updateVariables,
                        };
            
                        await fetchGraphQL(updateSubscriptionQuery);
                        console.log('Subscription for User has been created');
                    } else {
                        console.log('No subscription found for the given customer ID');
                    }
                } else {
                    console.log('No subscription found for the given customer ID');
                }
            } catch (error) {
                console.error('Error processing customer.subscription.created event:', error);
                return createErrorResponse(error);
            }
            break;
        case 'customer.subscription.updated':
            try {
                // Extract relevant information from the event
                const customerSubscriptionUpdated = body.data.object;
                const subscriptionUpdatedId = customerSubscriptionUpdated.id;
                const customerUpdatedId = customerSubscriptionUpdated.customer;
                const statusUpdated = customerSubscriptionUpdated.status;
        
                // Query subscriptions to get the subscription belonging to the customer
                const subscriptionsQuery = {
                    query: listSubscriptions,
                    variables: {
                        filter: {
                            customer_id: { eq: customerUpdatedId }, // Filter subscriptions by customer_id
                            subscription_id: { eq: subscriptionUpdatedId }, // Filter subscriptions by subscription_id
                        },
                    },
                };
        
                const subscriptionsResponse = await fetchGraphQL(subscriptionsQuery);
        
                if (!subscriptionsResponse.errors && subscriptionsResponse.data.listSubscriptions.items.length > 0) {
                    // Subscription found, proceed with the update
                    const subscriptionId = subscriptionsResponse.data.listSubscriptions.items[0].id;

                    const updateVariables = {
                        input: {
                            id: subscriptionId, // Include the subscription ID in the input
                            subscription_status: statusUpdated,
                        },
                    };
        
                    const updateSubscriptionQuery = {
                        query: updateSubscriptions,
                        variables: updateVariables,
                    };
        
                    await fetchGraphQL(updateSubscriptionQuery);
                    console.log('Subscription for User has been updated');
                } else {
                    console.log('No subscription found for the given customer and subscription ID');
                }
            } catch (error) {
                console.error('Error processing customer.subscription.updated event:', error);
                return createErrorResponse(error);
            }
            break;
        case 'customer.subscription.deleted':
            try {
                // Extract relevant information from the event
                const customerSubscriptionDeleted = body.data.object;
                const subscriptionDeletedId = customerSubscriptionDeleted.id;
                const customerDeletedId = customerSubscriptionDeleted.customer;
                const statusDeleted = customerSubscriptionDeleted.status;
        
                // Query subscriptions to get the subscription belonging to the customer
                const subscriptionsQuery = {
                    query: listSubscriptions,
                    variables: {
                        filter: {
                            customer_id: { eq: customerDeletedId }, // Filter subscriptions by customer_id
                            subscription_id: { eq: subscriptionDeletedId }, // Filter subscriptions by subscription_id
                        },
                    },
                };
        
                const subscriptionsResponse = await fetchGraphQL(subscriptionsQuery);
        
                if (!subscriptionsResponse.errors && subscriptionsResponse.data.listSubscriptions.items.length > 0) {
                    // Subscription found, proceed with the update
                    const subscriptionId = subscriptionsResponse.data.listSubscriptions.items[0].id;

                    const deleteVariables = {
                        input: {
                            id: subscriptionId, // Include the subscription ID in the input
                            subscription_status: statusDeleted,
                            subscription_id: null
                        },
                    };
        
                    const deleteSubscriptionQuery = {
                        query: updateSubscriptions,
                        variables: deleteVariables,
                    };
        
                    await fetchGraphQL(deleteSubscriptionQuery);
                    console.log('Subscription for User has been deleted');
                } else {
                    console.log('No subscription found for the given customer and subscription ID');
                }
            } catch (error) {
                console.error('Error processing customer.subscription.deleted event:', error);
                return createErrorResponse(error);
            }
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return createSuccessResponse();
};

async function fetchGraphQL(query) {
    const options = {
        method: 'POST',
        headers: {
            'x-api-key': GRAPHQL_API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
    };

    const request = new Request(GRAPHQL_ENDPOINT, options);
    const response = await fetch(request);
    const responseBody = await response.json();

    if (responseBody.errors) {
        throw new Error(`GraphQL request failed: ${JSON.stringify(responseBody.errors)}`);
    }
    console.log(responseBody);
    return responseBody;
}

function createSuccessResponse() {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
    };
}

function createErrorResponse(error) {
    return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
    };
}