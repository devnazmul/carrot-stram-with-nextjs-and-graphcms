
import { gql } from "graphql-request";


export const getSubscribedChannelsQuery = async (gqlClient) => {
  const query = gql`
    query getSubscribedChannels {
      videos {
        id
        slug
        title
        publishedAt
        thumbnail {
          url
        }
        views {
          id
        }
        channel {
          channelName
          channelLogo {
            url
          }
        }
      }
    }
    `;
  const result = await gqlClient.request(query);
  const channels = result.channels;
  return channels;
}