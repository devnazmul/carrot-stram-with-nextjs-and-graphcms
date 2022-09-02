import { gql } from "graphql-request";


export const getVideosForHomePageQuery = async (gqlClient) => {
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
                likeCount
                viewsCount
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
    const videos = result.videos;
    return videos;
  };