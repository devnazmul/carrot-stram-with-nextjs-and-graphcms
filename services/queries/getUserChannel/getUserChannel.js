
import { gql } from "graphql-request";


export const getUserChannelQuery = async (gqlClient, email) => {
  const query = gql`
  query getUserChannel {
    author(where: {email: "${email}"}) {
      channels {
        slug
        channelName
        channelLogo {
            url
          }
      }
    }
  }
`;
  const result = await gqlClient.request(query);
  const author = result.author;
  return author;
}