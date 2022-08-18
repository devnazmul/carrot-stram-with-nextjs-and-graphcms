
import { gql } from "graphql-request";


export const getOwnVideosQuery = async (gqlClient, email) => {
  const query = gql`
  query getOwnVideos {
    videos(where: {channel: {author: {email: "${email}"}}}) {
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
  console.log(result);
  const video = result.videos;
  return video;
}