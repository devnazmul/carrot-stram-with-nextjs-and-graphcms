import { GraphQLClient } from "graphql-request";
import { createAuthorMutation } from './mutations/createAuthor/createAuthor';
import { updateAssetStageMutation } from './mutations/updateAssetStage/updateAssetStage';
import { updateAuthorStageMutation } from './mutations/updateAuthorStage/updateAuthorStage';
import { createUserQuery } from './queries/createUser/createUser';
import { getPlaylistsQuery } from './queries/getPlaylist/getPlaylist';
import { getSingleVideoQuery } from './queries/getSingleVideo/getSingleVideo';
import { getSubscribedChannelsQuery } from './queries/getSubscribedChannels/getSubscribedChannels';
import { getUsersChannelQuery } from './queries/getUsersChannel/getUsersChannel';
import { getVideosForHomePageQuery } from './queries/getVideosForHomePage/getVideosForHomePage';
import { isAuthorLoggedInQuery } from './queries/isAuthorLoggedIn/isAuthorLoggedIn';

// GRAPHCMS CONFIG ============================================================
const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
  headers: {
    "Authentication": process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN
  }
});

// MUTATIONS ============================================================
export const updateAssetStage = (id) => {
  return updateAssetStageMutation(gqlClient, id);
}
export const createAuthor = (authorObject) => {
  return createAuthorMutation(gqlClient, authorObject);
}
export const updateAuthorStage = (id) => {
  return updateAuthorStageMutation(gqlClient, id);
}

// QUERIES ============================================================
export const getVideosForHomePage = () => {
  return getVideosForHomePageQuery(gqlClient)
}
export const getSubscribedChannels = () => {
  return getSubscribedChannelsQuery(gqlClient)
}
export const getPlaylists = () => {
  return getPlaylistsQuery(gqlClient)
}
export const getSingleVideo = (slug) => {
  return getSingleVideoQuery(gqlClient, slug);
}
export const createUser = (name) => {
  return createUserQuery(gqlClient, name);
}
export const isAuthorLoggedIn = (email, pass) => {
  return isAuthorLoggedInQuery(gqlClient, email, pass);
}
export const getUsersChannel = (slug) => {
  return getUsersChannelQuery(gqlClient, slug);
}


