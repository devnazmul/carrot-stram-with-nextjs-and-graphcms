import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getVideos = async () => {
  const query = gql`
    query MyQuery {
      videosConnection {
        edges {
          node {
            createdAt
            id
            title
            url
            view {
              id
            }
            author {
              id
              usename
              avater {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  const data = result.videosConnection.edges;
  return data;
};

