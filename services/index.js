import { gql, GraphQLClient } from "graphql-request";

const graphCMSEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const gqlClient = new GraphQLClient(graphCMSEndpoint, {
  headers: {
    "Authentication": process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN
  }
});

export const getVideosForHomePage = async () => {
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

  const result = await gqlClient.request(query);
  const videos = result.videos;
  return videos;
};

export const getSubscribedChannels = async () => {
  const query = gql`
  query getChannels {
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

  const result = await gqlClient.request(query);
  const channels = result.channels;
  return channels;
}


export const getPlaylists = async () => {
  const query = gql`
  query getChannels {
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

export const getSingleVideo = async (slug) => {

  const query = gql`
  query getVideos {
    videos(
      where: {slug: "${slug}"}
    ) {
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
        videos {
          slug
          thumbnail {
            url
          }
          title
          views {
            id
          }
        }
      }
      tags
      videoContent {
        url
      }
      videoLikes {
        id
      }
      description
    }
  }
`;
  const result = await gqlClient.request(query);
  const videos = result.videos;
  return videos;
}
