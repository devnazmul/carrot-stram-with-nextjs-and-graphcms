
import { gql } from "graphql-request";


export const getPlaylistByChannelSlugQuery = async (gqlClient, slug) => {
  const query = gql`
  query getPlaylistByChannelSlug {
    channel(where: {slug: "${slug}"}) {
        playlists(orderBy: createdAt_DESC) {
          name
          slug
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
    }
}

`;
  const result = await gqlClient.request(query);
  const playlists = result.channel.playlists;
  return playlists;
}