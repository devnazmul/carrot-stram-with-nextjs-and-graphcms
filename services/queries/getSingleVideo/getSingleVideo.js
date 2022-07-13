
import { gql } from "graphql-request";


export const getSingleVideoQuery = async (gqlClient,slug) => {
  const query = gql`
  query getVideos {
    videos(
      where: {slug: "${slug}"}
    ) {
      id
      title
      publishedAt
      views {
        id
      }
      channel {
        slug
        channelName
        channelLogo {
          url
        }
        videos {
          slug
          thumbnail {
            url
          }
          title
          views {
            id
          }
        }
      }
      videoContent {
        url
      }
      videoLikes {
        id
      }
      description{
        html
      }
    }
  }
`;
  const result = await gqlClient.request(query);
  const videos = result.videos;
  return videos;
}