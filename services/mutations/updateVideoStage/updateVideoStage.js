import { gql } from "graphql-request";

export const updateVideoStageMutation = async (gqlClient,id) => {
    const query = gql`
    mutation publishVideo {
        publishVideo(where: {id: "${id}"}, to: PUBLISHED) {
          slug
        }
      }
  `;
    const result = await gqlClient.request(query);
    const author = result.publishVideo;
    console.log(author);
    return author;
  }