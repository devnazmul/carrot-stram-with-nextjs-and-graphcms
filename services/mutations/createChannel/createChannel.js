import { gql } from "graphql-request";

export const createChannelMutation = async (gqlClient,slug,name,authorEmail) => {
    const query = gql`
    mutation createChannel {
      createChannel(
        data: {slug: "${slug}",channelName: "${name}", author: {connect: {email: "${authorEmail}"}}}
      ) {
        slug
      }
    }
  `;
    const result = await gqlClient.request(query)
    return result.createChannel.slug;
  }