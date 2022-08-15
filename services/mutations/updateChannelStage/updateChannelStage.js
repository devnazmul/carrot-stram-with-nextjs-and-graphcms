import { gql } from "graphql-request";

export const updateChannelStageMutation = async (gqlClient,slug) => {
    const query = gql`
    mutation updateChannelStage {
      publishChannel(where: {slug: "${slug}"}, to: PUBLISHED) {
        slug
      }
    }
  `;
    const result = await gqlClient.request(query);
    const channelSlug = result.publishChannel.slug;
    return channelSlug;
  }