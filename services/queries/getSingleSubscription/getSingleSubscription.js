
import { gql } from "graphql-request";


export const getSingleSubscriptionQuery = async (gqlClient,channelSlug,authorEmail) => {
  const query = gql`
  query getSingleSubscription {
    author(where: {email: "${authorEmail}"}) {
        subscriptions(where: {slug: "${channelSlug}"}) {
          id
        }
    }
  }
  
`;
  const result = await gqlClient.request(query);
  const subscriptions = result.author;
  return subscriptions;
}