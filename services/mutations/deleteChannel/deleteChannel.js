import { gql } from "graphql-request";

export const deleteChannelMutation = async (gqlClient,slug,name,authorEmail) => {
    const query = gql`
    mutation MyMutation {
        deleteChannel(where: {slug: "${slug}"}) {
          slug
        }
      }
  `;
    const result = await gqlClient.request(query)
    return result.deleteChannel.slug;
  }