
import { gql } from "graphql-request";


export const getUserSubscriptionsQuery = async (gqlClient,userSlug) => {
  const query = gql`
    query getUserSubscriptions {
      author(where: {slug: "${userSlug}"}) {
        subscriptions {
          channelName
          channelLogo {
            url(transformation: {image: {resize: {height: 200, width: 200}}})
          }
          slug
        }
      }
    }
    `;
  const result = await gqlClient.request(query);
  const subscriptions = result.author.subscriptions;
  return subscriptions;
}