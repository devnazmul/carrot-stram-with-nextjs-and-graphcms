import { creareAuthor, updateAssetStage, updateAuthorStage } from "../services";

export const submitAuthor = async (obj) => {
    const graphCMSAssetUploadEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ASSET_UPLOAD_ENDPOINT;
    // Upload Image
    const form = new FormData();
    form.append("fileUpload", obj.fileName[0]);
    const result = await fetch(graphCMSAssetUploadEndpoint, {
        method: 'POST',
        headers: {
            Authorization: process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN,
        },
        body: form,
    }).then(response => { return response.json() })

    // Publish Image
    updateAssetStage(result.id).then((id) => {
        const assetId = id;
        if (assetId !== undefined) {
            // create Author
            const { fullName, username, email, about, password } = obj;
            let id = assetId;
            const authorObject = { id, fullName, username, email, about, password }
            creareAuthor(authorObject).then((authorId) => {
                console.log(authorId);

                if (authorId !== undefined) {
                    // Publish Author
                    updateAuthorStage(authorId).then((userData) => {
                        return userData;
                    })
                }
            })
        } else {
            return {
                error: {
                    message: 'Uploading failed!'
                }
            }
        }
    });


}