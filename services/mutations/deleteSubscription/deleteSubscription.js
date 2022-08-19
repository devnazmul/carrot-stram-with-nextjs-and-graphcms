import { gql } from "graphql-request";
import { updateAuthorStage } from "../..";

export const deleteSubscriptionMutation = async (gqlClient,channelSlug,authorEmail) => {
    const query = gql`
    mutation deleteSubscriptionMutation {
        updateAuthor(
            data: {
              subscriptions: {
                disconnect:{
                  slug: "${channelSlug}"}
                }
              }
            where: {email: "${authorEmail}"}
          ) {
            id
            updatedAt
          }
      }
  `;
    const result = await gqlClient.request(query)

    if (result?.updateAuthor.id) {
      const updateDate = updateAuthorStage(result.updateAuthor.id).then(response=>{
        if (response) {
          console.log(result.updateAuthor);
          return result.updateAuthor;
        }
      })
      return updateDate;
    }
  }