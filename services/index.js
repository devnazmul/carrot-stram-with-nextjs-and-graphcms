import { GraphQLClient } from "graphql-request";
import { createAuthorMutation } from './mutations/createAuthor/createAuthor';
import { updateAssetStageMutation } from './mutations/updateAssetStage/updateAssetStage';
import { updateAuthorStageMutation } from './mutations/updateAuthorStage/updateAuthorStage';
import { updateVideoStageMutation } from './mutations/updateVideoStage/updateVideoStage';
import { uploadVideoMutation } from './mutations/uploadVideo/uploadVideo';
import { createUserQuery } from './queries/createUser/createUser';
import { getPlaylistsQuery } from './queries/getPlaylist/getPlaylist';
import { getSingleVideoQuery } from './queries/getSingleVideo/getSingleVideo';
import { getUserChannelsQuery } from './queries/getUserChannels/getUserChannels';
import { getUserSubscriptionsQuery } from './queries/getUserSubscriptions/getUserSubscriptions';
import { getVideosForHomePageQuery } from './queries/getVideosForHomePage/getVideosForHomePage';
import { isAuthorLoggedInQuery } from './queries/isAuthorLoggedIn/isAuthorLoggedIn';

// GRAPHCMS CONFIG ============================================================
const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
  headers: {
    "Authentication": process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN
  }
});

// MUTATIONS ============================================================
export const updateAssetStage = (assetId) => {
  return updateAssetStageMutation(gqlClient, assetId);
}
export const createAuthor = (authorObject) => {
  return createAuthorMutation(gqlClient, authorObject);
}
export const updateAuthorStage = (authorId) => {
  return updateAuthorStageMutation(gqlClient, authorId);
}
export const uploadVideo = (title, description, thumId, vidId, slug) => {
  return uploadVideoMutation(gqlClient, title, description, thumId, vidId, slug);
}
export const updateVideoStage = (videoId) => {
  return updateVideoStageMutation(gqlClient, videoId);
}

// QUERIES ============================================================
export const getVideosForHomePage = () => {
  return getVideosForHomePageQuery(gqlClient)
}
export const getUserSubscriptions = (userSlug) => {
  return getUserSubscriptionsQuery(gqlClient, userSlug)
}
export const getPlaylists = () => {
  return getPlaylistsQuery(gqlClient)
}
export const getSingleVideo = (videoSlug) => {
  return getSingleVideoQuery(gqlClient, videoSlug);
}
export const createUser = (name) => {
  return createUserQuery(gqlClient, name);
}
export const isAuthorLoggedIn = (email, pass) => {
  return isAuthorLoggedInQuery(gqlClient, email, pass);
}
export const getUserChannels = (userSlug) => {
  return getUserChannelsQuery(gqlClient, userSlug);
}
