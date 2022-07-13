
import { gql } from "graphql-request";


export const getSingleChannelQuery = async (gqlClient,slug) => {
  const query = gql`
  query getSingleChannel {
    channel(where: {slug: "${slug}"}) {
      channelName
      channelLogo {
        url(transformation: {image: {resize: {height: 200, width: 200}}})
      }
      channelDescription {
        html
      }
      channelBanner {
        url
      }
      slug
      videos {
        updatedAt
        slug
        title
        thumbnail {
          url(transformation: {image: {resize: {width: 236, height: 132}}})
        }
        views {
          id
        }
      }
      subscribers {
        id
      }
    }
  }
  
`;
  const result = await gqlClient.request(query);
  const channel = result.channel;
  return channel;
}