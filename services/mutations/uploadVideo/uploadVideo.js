import { gql } from "graphql-request";

export const uploadVideoMutation = async (gqlClient,title,description,thumId,videoLink,slug,channelSlug) => {
    const query = gql`
    mutation MyMutation {
        createVideo(
          data: {
            title: "${title}", 
            videoContent: "${videoLink}", 
            description: "${description}", 
            thumbnail: {
              connect: {
                id: "${thumId}"
              }
            }, 
            channel: {
              connect: {
                slug: "${channelSlug}"
              }
            }, 
            slug: "${slug}"
          }
        ) {
          id
        }
      }
    `;
    const result = await gqlClient.request(query)
    const authorId = result;
    return authorId;
  }