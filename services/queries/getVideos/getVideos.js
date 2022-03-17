import { gql } from "graphql-request";

export const getVideosQuery = gql`
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
  

  
  