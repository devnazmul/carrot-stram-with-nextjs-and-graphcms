import { gql } from "graphql-request";

export const updateAssetStageMutation = async (gqlClient,id) => {
    const query = gql`
    mutation MyMutation {publishAsset(where: { id: "${id}" }, to: PUBLISHED){
      id
    }}
  `;
    const result = await gqlClient.request(query);
    const assetId = result.publishAsset.id;
    return assetId;
  }