import { gql } from "graphql-request";

export const getUserChannelsQuery = async (gqlClient,slug) => {
    const query = gql`
    query getUserChannels {
      author(where: {slug: "${slug}"}) {
        channels {
          channelName
          channelLogo {
            url(transformation: {image: {resize: {width: 200, height: 200}}})
          }
          channelBanner {
            url(transformation: {image: {resize: {height: 300, width: 1200}}})
          }
          slug
        }
      }
    }
  `;
    const result = await gqlClient.request(query);
    const channels = result.author.channels;
    return channels;
  }