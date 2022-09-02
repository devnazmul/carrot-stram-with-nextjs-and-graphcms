import { gql } from "graphql-request";

export const updateChannelStageMutation = async (gqlClient,slug) => {
    const query = gql`
    mutation updateChannelStage {
      publishChannel(where: {slug: "${slug}"}, to: PUBLISHED) {
        slug
        author {
          id
        }
      }
    }
  `;
    const result = await gqlClient.request(query);
    const authorID = result.publishChannel.author.id;
    return authorID;
  }