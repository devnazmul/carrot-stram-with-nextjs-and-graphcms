import { gql } from "graphql-request";

export const isAuthorLoggedInQuery = async (gqlClient,email, pass) => {
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
        slug
      }
    }
  `;
    const result = await gqlClient.request(query);
    const password = result.author.password;
    if (password === pass) {
      delete result.author.password;
      localStorage.setItem('UserData', JSON.stringify(result.author))
      return {
        status: true
      }
    }
    return {
      status: false
    };
  }