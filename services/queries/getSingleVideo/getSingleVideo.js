import { gql } from "graphql-request";

export const getVideo = (slug) => {
    const query = gql`
    query getVideos {
        videos(where: {slug: ${slug}}) {
          id
          title
          publishedAt
          views {
            id
          }
          channel {
            channelName
            channelLogo {
              url
            }
          }
          tags
        }
      }
        `;
    return query;
}
