
import { gql } from "graphql-request";


export const getTopLikedVideoQuery = async (gqlClient, slug) => {
  const query = gql`
  query getTopLikedVideo {
    videos(orderBy: likeCount_DESC, where: {channel: {slug: "${slug}"}}) {
        id
        slug
        title
        publishedAt
        thumbnail {
          url
        }
        channel {
          channelName
          channelLogo {
            url
          }
        }
        likeCount
        viewsCount
      }
}

`;
  const result = await gqlClient.request(query);
  const videos = result.videos;
  return videos;
}
