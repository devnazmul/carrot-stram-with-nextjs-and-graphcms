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
      description{
        markdown
        raw
        text
        html
      }
    }
  }
`;
  const result = await gqlClient.request(query);
  const videos = result.videos;
  return videos;
}

// export const getVideoFromChannel = async () => {
//   const query = gql`yourQuery`;
//   const result = await gqlClient.request(query);
//   const videos = result.videos;
//   return videos;
// }

export const createUser = async (name) => {
  const query = gql`
  mutation MyMutation {
    createAsset(data: {handle: ${"test"}, fileName: ${name}}){
      width
      url
      updatedAt
      stage
      size
      publishedAt
      mimeType
      locale
      id
      height
      handle
      fileName
      createdAt
    }
  }`;

  const result = await gqlClient.request(query);
  const author = result;
  return author;
};

export const isAuthorLoggedIn = async (email, pass) => {
  const query = gql`
  query MyQuery {
    author(where: {email: "${email}"}) {
      password
      email
      avatar {
        url(transformation: {image: {resize: {width: 200, height: 200, fit: crop}}})
      }
      fullName
      username
      about
      channels {
        channelName
        id
        slug
        channelLogo {
          url(transformation: {image: {resize: {height: 200, width: 200}}})
        }
      }
      subscriptions {
        channelLogo {
          url
        }
        channelName
        slug
        id
      }
    }
  }
`;
  const result = await gqlClient.request(query);
  const password = result.author.password;
  if (password === pass) {
    localStorage.setItem('UserData', JSON.stringify(result.author))
    return {
      status: true
    }
  }
  return {
    status: false
  };
}


// MUTATIONS ============================================================
export const updateAssetStage = async (id) => {
  const query = gql`
  mutation MyMutation {publishAsset(where: { id: "${id}" }, to: PUBLISHED){
    id,
    url
  }}
`;
  const result = await gqlClient.request(query);
  const assetId = result.publishAsset.id;
  return assetId;
}

export const creareAuthor = async (authorObject) => {
  const query = gql`
  mutation createAuthMutation($id: ID!, $slug:String!, $fullName:String!,$username:String!,$email:String!,$about:String!, $password:String!,) {
         createAuthor(data: {slug:$slug, fullName: $fullName, username: $username, email: $email, about: $about password: $password, avatar: {connect: {id: $id}}}){
             id
          }
     }
`;
  const result = await gqlClient.request(query, authorObject)
  const authorId = result.createAuthor.id;
  return authorId;
}

export const updateAuthorStage = async (id) => {
  const query = gql`
  mutation MyMutation {
    publishAuthor(where: { id: "${id}" }, to: PUBLISHED){
      email
      avatar {
        url(transformation: {image: {resize: {width: 200, height: 200, fit: crop}}})
      }
      fullName
      username
      about
      channels {
        channelName
        id
        slug
        channelLogo {
          url(transformation: {image: {resize: {height: 200, width: 200}}})
        }
      }
      subscriptions {
        channelLogo {
          url
        }
        channelName
        slug
        id
      }
    }
  }
`;
  const result = await gqlClient.request(query);
  const author = result.publishAuthor;
  return author;
}
