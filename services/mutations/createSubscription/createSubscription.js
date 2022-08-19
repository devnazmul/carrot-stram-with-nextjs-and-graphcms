import { gql } from "graphql-request";
import { updateAuthorStage } from "../..";

export const createSubscriptionMutation = async (gqlClient, channelSlug, authorEmail) => {
  const query = gql`
    mutation createSubscriptionMutation {
        updateAuthor(
            data: {subscriptions: {connect: {where: {slug: "${channelSlug}"}}}}
            where: {email: "${authorEmail}"}
          ) {
            id
            updatedAt
          }
      }
  `;
  const result = await gqlClient.request(query)
  if (result?.updateAuthor.id) {
    const updateDate = updateAuthorStage(result.updateAuthor.id).then(response => {
      if (response.email) {
        return result.updateAuthor;
      }
    })
    return updateDate;
  }
}