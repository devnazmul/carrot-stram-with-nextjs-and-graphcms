import { GraphQLClient } from "graphql-request";
import { createAuthorMutation } from './mutations/createAuthor/createAuthor';
import { createChannelMutation } from './mutations/createChannel/createChannel';
import { createSubscriptionMutation } from './mutations/createSubscription/createSubscription';
import { deleteChannelMutation } from './mutations/deleteChannel/deleteChannel';
import { deleteSubscriptionMutation } from './mutations/deleteSubscription/deleteSubscription';
import { updateAssetStageMutation } from './mutations/updateAssetStage/updateAssetStage';
import { updateAuthorStageMutation } from './mutations/updateAuthorStage/updateAuthorStage';
import { updateChannelStageMutation } from './mutations/updateChannelStage/updateChannelStage';
import { updateVideoStageMutation } from './mutations/updateVideoStage/updateVideoStage';
import { uploadVideoMutation } from './mutations/uploadVideo/uploadVideo';
import { createUserQuery } from './queries/createUser/createUser';
import { getOwnVideosQuery } from './queries/getOwnVideos/getOwnVideos';
import { getOwnVideosQueryBySlug } from './queries/getOwnVideosBySlug/getOwnVideosBySlug';
import { getPlaylistsQuery } from './queries/getPlaylist/getPlaylist';
import { getPlaylistByChannelSlugQuery } from './queries/getPlaylistByChannelSlug/getPlaylistByChannelSlug';
import { getSingleChannelQuery } from './queries/getSingleChannel/getSingleChannel';
import { getSingleSubscriptionQuery } from './queries/getSingleSubscription/getSingleSubscription';
import { getSingleVideoQuery } from './queries/getSingleVideo/getSingleVideo';
import { getTopLikedVideoQuery } from './queries/getTopLikedVideo/getTopLikedVideo';
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
  // CREATE =============================================================
export const createAuthor = (authorObject) => {
  return createAuthorMutation(gqlClient, authorObject);
}
export const createSubscription = (channelSlug,authorEmail) => {
  return createSubscriptionMutation(gqlClient, channelSlug,authorEmail);
}
export const deleteSubscription = (channelSlug,authorEmail) => {
  return deleteSubscriptionMutation(gqlClient, channelSlug,authorEmail);
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
  // DELETE ============================================================
export const deleteChannel = (slug) => {
  return deleteChannelMutation(gqlClient, slug);
}

// QUERIES ============================================================
export const getVideosForHomePage = () => {
  return getVideosForHomePageQuery(gqlClient)
}
export const getSingleSubscription = (channelSlug,authorEmail) => {
  return getSingleSubscriptionQuery(gqlClient,channelSlug,authorEmail)
}
export const getPlaylists = () => {
  return getPlaylistsQuery(gqlClient)
}
export const getPlaylistByChannelSlug = (channelSlug) => {
  return getPlaylistByChannelSlugQuery(gqlClient,channelSlug)
}
export const getTopLikedVideo = (channelSlug) => {
  return getTopLikedVideoQuery(gqlClient,channelSlug)
}
export const getOwnVideos = (email) => {
  return getOwnVideosQuery(gqlClient,email)
}
export const getOwnVideosBySlug = (slug) => {
  return getOwnVideosQueryBySlug(gqlClient,slug)
}
export const getUserChannel = (email) => {
  return getUserChannelQuery(gqlClient, email)
}
export const getUserSubscriptions = (userSlug) => {
  return getUserSubscriptionsQuery(gqlClient, userSlug)
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
