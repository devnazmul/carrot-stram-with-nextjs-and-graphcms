import { updateAssetStage, updateVideoStage, uploadVideo } from "../services";


export const submitVideo = async (obj) => {
    console.log(obj);
    const graphCMSAssetUploadEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ASSET_UPLOAD_ENDPOINT;
    // Upload Thumbnail
    const form1 = new FormData();
    form1.append("fileUpload", obj.videoContent[0]);
    const result1 = await fetch(graphCMSAssetUploadEndpoint, {
        method: 'POST',
        mode:'cors',
        headers: {
            Authorization: process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN,
        },
        body: form1,
    })
    // Upload Video
    const form2 = new FormData();
    form2.append("fileUpload", obj.thumbnail[0]);
    const result2 = await fetch(graphCMSAssetUploadEndpoint, {
        method: 'POST',
        headers: {
            Authorization: process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN,
        },
        body: form2,
    })

    // Publish Thumbnail
    updateAssetStage(result2.id).then((thumId) => {
        if (thumId !== undefined) {
            // Publish Video
            updateAssetStage(result1.id).then((vidId) => {
                if (vidId !== undefined) {
                    // Upload Video
                    const { title, description, slug } = obj;
                    uploadVideo(title, description, thumId, vidId, slug).then((videoId) => {
                        if (videoId !== undefined) {
                            // Publish Video
                            return updateVideoStage(videoId).then((publishedVideoSlug) => {
                                return publishedVideoSlug;
                            })
                        } else {
                            return {
                                error: {
                                    message: 'Uploading failed!'
                                }
                            }
                        }

                    })
                } else {
                    return {
                        error: {
                            message: 'Uploading failed!'
                        }
                    }
                }
            }
            )
        } else {
            return {
                error: {
                    message: 'Uploading failed!'
                }
            }
        }
    })
}