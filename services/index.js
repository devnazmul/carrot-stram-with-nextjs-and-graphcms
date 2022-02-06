import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getVideos = async () => {
  const query = gql`
  query getVideos {
    videos {
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

  const result = await request(graphqlAPI, query);
  const data = result.videos;
  return data;
};

