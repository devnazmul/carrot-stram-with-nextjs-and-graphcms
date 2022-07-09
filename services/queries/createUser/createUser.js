import { gql } from "graphql-request";

export const createUserQuery = async (gqlClient,name) => {
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