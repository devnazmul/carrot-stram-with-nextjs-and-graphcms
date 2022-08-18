import axios from "axios";
import { updateAssetStage, updateVideoStage, uploadVideo } from "../services";

export const submitVideo = async (obj) => {
    // ==================================================
    // ================ START FROM HERE =================
    // ==================================================
    const videoForm = new FormData();
    videoForm.append(
        "videoUpload",
        obj.videoContent[0],
        obj.videoContent[0].name
    );
    console.log(process.env.NEXT_PUBLIC_SERVER_API_BEGINNING_POINT);
    // POST API FOR VIDEO UPLOAD 
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API_BEGINNING_POINT}/upload`,
        videoForm
    );

    // IF VIDEO LINK GENERATED SUCCESSFULLY 
    if (response.data.data !== null) {
        const videoLink = response.data.data;

        // const fileName = response?.data?.data.split("/").slice(3,videoLink.length).join("/")
        // if (true) {
        //     console.log(fileName);
        //     const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_API_BEGINNING_POINT}/delete?fileName='${fileName}'`);
        // }
        // POST THUMBNAIL TO HYGRAPH 





        // 1

        const thumbnailForm = new FormData();
        thumbnailForm.append("fileUpload", obj.thumbnail[0]);
        const thumbnailLink = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ASSET_UPLOAD_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN,
            },
            body: thumbnailForm,
        }).then(response => { return response.json() })




        // 2
        
        // Publish Thumbnail
        updateAssetStage(thumbnailLink.id).then((thumId) => {
            if (thumId !== undefined) {
                // Upload VideoContent
                const { title, description, slug, channel } = obj;
                uploadVideo(title, description, thumId, videoLink, slug, channel).then((res) => {
                    if (res.createVideo.id !== undefined) {
                        const videoId = res.createVideo.id;
                        // Publish Video
                        return updateVideoStage(videoId).then((publishedVideoSlug) => {
                            console.log(publishedVideoSlug);
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
        // // ==================================================
        // // ================ END IN HERE =================
        // // ==================================================
    }

}