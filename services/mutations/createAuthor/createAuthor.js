import { gql } from "graphql-request";

export const createAuthorMutation = async (gqlClient,authorObject) => {
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