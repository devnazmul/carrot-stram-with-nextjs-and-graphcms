import { gql } from "graphql-request";

export const getPlaylistsQuery = async (gqlClient) => {
  const query = gql`
    query getPlaylists {
      playlists {
        id
        name
        publishedAt
        slug
      }
    }
    `;
  const result = await gqlClient.request(query);
  const playlists = result.playlists;
  return playlists;
}
