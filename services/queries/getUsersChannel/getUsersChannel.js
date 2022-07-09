import { gql } from "graphql-request";

export const getUsersChannelQuery = async (gqlClient,slug) => {
    const query = gql`
    query getUserChannels {
      author(where: {slug: ${slug}}) {
        channels {
          channelName
          channelLogo {
            url(transformation: {image: {resize: {width: 200, height: 200}}})
          }
          slug
        }
      }
    }
  `;
    const result = await gqlClient.request(query);
    const channel = result;
    return channel;
  }