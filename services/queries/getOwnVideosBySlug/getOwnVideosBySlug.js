
import { gql } from "graphql-request";


export const getOwnVideosQueryBySlug = async (gqlClient, slug) => {
  const query = gql`
  query getOwnVideos {
    videos(where: {channel: {slug: "${slug}"}}) {
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