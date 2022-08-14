
import { gql } from "graphql-request";


export const getSingleVideoQuery = async (gqlClient, slug) => {
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
    }
    videoContent
    videoLikes {
      id
    }
    description
    thumbnail {
      url
    }
  }
}

`;
  const result = await gqlClient.request(query);
  const videos = result.videos;
  console.log(videos.videos);
  return videos;
}