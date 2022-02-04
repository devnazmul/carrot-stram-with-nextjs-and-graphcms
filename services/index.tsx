import { gql, request } from 'graphql-request';

const graphqlAPI=`https://api-ap-south-1.graphcms.com/v2/ckyyobxtf05dl01zchugfh4jv/master`;
// process.env.NEXT_GRAPHCMS_API_ENDPOINTS;

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
      }`

      const result = await request(graphqlAPI,query);
      return result.videosConnection.edges;
} 