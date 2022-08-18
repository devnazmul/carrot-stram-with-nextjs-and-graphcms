import { GraphQLClient } from "graphql-request";
import { createChannelMutation } from './mutations/createChannel/createChannel';
import { deleteChannelMutation } from './mutations/deleteChannel/deleteChannel';
import { updateAssetStageMutation } from './mutations/updateAssetStage/updateAssetStage';
import { updateAuthorStageMutation } from './mutations/updateAuthorStage/updateAuthorStage';
import { updateChannelStageMutation } from './mutations/updateChannelStage/updateChannelStage';
import { updateVideoStageMutation } from './mutations/updateVideoStage/updateVideoStage';
import { uploadVideoMutation } from './mutations/uploadVideo/uploadVideo';
import { createUserQuery } from './queries/createUser/createUser';
import { getOwnVideosQuery } from './queries/getOwnVideos/getOwnVideos';
import { getPlaylistsQuery } from './queries/getPlaylist/getPlaylist';
import { getSingleChannelQuery } from './queries/getSingleChannel/getSingleChannel';
import { getSingleVideoQuery } from './queries/getSingleVideo/getSingleVideo';
import { getUserChannelQuery } from './queries/getUserChannel/getUserChannel';
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
// CREATE 
export const createAuthor = (authorObject) => {
  return createChannelMutation(gqlClient, authorObject);
}
export const createChannel = (slug, name, authorEmail) => {
  return createChannelMutation(gqlClient, slug, name, authorEmail);
}
export const uploadVideo = (title, description, thumId, videoLink, slug, channelSlug) => {
  return uploadVideoMutation(gqlClient, title, description, thumId, videoLink, slug, channelSlug);
}
// UPDATE 
export const updateAuthorStage = (authorId) => {
  return updateAuthorStageMutation(gqlClient, authorId);
}
export const updateAssetStage = (assetId) => {
  return updateAssetStageMutation(gqlClient, assetId);
}
export const updateVideoStage = (videoId) => {
  return updateVideoStageMutation(gqlClient, videoId);
}
export const updateChannelStage = (slug) => {
  return updateChannelStageMutation(gqlClient, slug);
}
// DELETE
export const deleteChannel = (slug) => {
  return deleteChannelMutation(gqlClient, slug);
}

// QUERIES ============================================================
export const getVideosForHomePage = () => {
  return getVideosForHomePageQuery(gqlClient)
}
export const getOwnVideos = (email) => {
  return getOwnVideosQuery(gqlClient,email)
}
export const getUserChannel = (email) => {
  return getUserChannelQuery(gqlClient, email)
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
export const getSingleChannel = (videoSlug) => {
  return getSingleChannelQuery(gqlClient, videoSlug);
}
