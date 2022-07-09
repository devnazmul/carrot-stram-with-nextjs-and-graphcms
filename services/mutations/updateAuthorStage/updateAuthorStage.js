import { gql } from "graphql-request";

export const updateAuthorStageMutation = async (gqlClient,id) => {
    const query = gql`
    mutation MyMutation {
      publishAuthor(where: { id: "${id}" }, to: PUBLISHED){
        slug
        email
        avatar {
          url(transformation: {image: {resize: {width: 200, height: 200, fit: crop}}})
        }
        fullName
        username
        about
      }
    }
  `;
    const result = await gqlClient.request(query);
    const author = result.publishAuthor;
    return author;
  }