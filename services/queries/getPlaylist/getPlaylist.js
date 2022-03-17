import { gql } from "graphql-request";

export const query = gql`
query getPlaylists {
  playlists {
    id
    name
    publishedAt
    slug
  }
}
`;

  