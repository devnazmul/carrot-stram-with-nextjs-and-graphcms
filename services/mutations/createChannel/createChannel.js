import { gql } from "graphql-request";

export const createChannelMutation = async (gqlClient,slug,description,name,authorEmail) => {
    const query = gql`
    mutation createChannel {
        createChannel(
          data: {slug: "${slug}", channelDescription: "${description}", channelName: "${name}", author: {connect: {email: "${authorEmail}"}}}
        ) {
          slug
        }
      }
  `;
    const result = await gqlClient.request(query, authorObject)
    console.log(result);
    return result;
  }