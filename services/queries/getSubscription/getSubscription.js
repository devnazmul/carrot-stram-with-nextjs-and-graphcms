import { gql } from "graphql-request";

export const query = gql`
query getSubscriptions {
  channels {
    id
    channelName
    channelLogo {
      url
    }
    slug
  }
}
`;
