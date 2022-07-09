import { gql } from "graphql-request";

export const uploadVideoMutation = async (gqlClient,title,description,thumId,vidId,slug) => {
    const query = gql`
        mutation createVideo {
            createVideo(
                data: {
                    title: "${title}",
                    description: "${description}",
                    thumbnail: {
                        connect: {
                            id: "${thumId}"
                        }
                    }, 
                    videoContent: {
                        connect: {
                            id: "${vidId}"
                        }
                    }, 
                    channel: {
                        connect: {
                            slug: "${slug}"
                        }
                    }
                }
            ) {
                id
            }
        }
    `;
    const result = await gqlClient.request(query)
    const authorId = result;
    console.log(authorId);
    return authorId;
  }