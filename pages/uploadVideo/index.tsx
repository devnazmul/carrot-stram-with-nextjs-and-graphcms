import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function index() {
  const [title, onTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [haveChannel, setHaveChannel] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <Layout>
      <Head>
        <title>Upload Video | Carrot Stream</title>
        <meta
          name="description"
          content="In this page you can upload video on your channel"
        />
      </Head>
      {haveChannel ? (
        <div className="pl-24 lg:pl-72 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
          <form className="w-full px-16" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-orange text-4xl mb-10 text-center">
              Upload video on your channel{" "}
            </h1>
            <input
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
              placeholder="Title"
              type="text"
              {...register("Title", { required: true, maxLength: 80 })}
            />
            <span className="flex justify-between">
              <label
                htmlFor="ut"
                title="Upload Thumbnail"
                className="bg-hr cursor-pointer w-1/3 text-6xl text-orange border-4 border-orange h-40 rounded-lg mb-5 justify-center items-center flex"
              >
                {!thumbnail && (
                  <Image
                    alt={"empty"}
                    loading={"lazy"}
                    src={"https://i.ibb.co/qWvBRhc/001-photo.png"}
                    height={50}
                    width={50}
                  />
                )}
              </label>
              <label
                htmlFor="uv"
                title="Upload Video"
                className="bg-hr cursor-pointer w-1/3 text-6xl text-orange border-4 border-orange h-40 rounded-lg mb-5 justify-center items-center flex"
              >
                <Image
                  loading={"lazy"}
                  src={"https://i.ibb.co/k4gmjf8/002-upload.png"}
                  height={50}
                  width={50}
                />
              </label>
              <input
                id="ut"
                className="rounded-lg hidden px-5 py-5 w-full mb-5"
                placeholder="thumbnail"
                type="file"
                {...register("Thumbnail", { required: true })}
              />
              <input
                id="uv"
                className="rounded-lg mt-5 hidden px-5 py-5 w-full mb-5"
                placeholder="videoContent"
                type="file"
                accept="video/mp4,video/x-m4v,video/*"
                {...register("Video", { required: true })}
              />
            </span>

            <textarea
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
              placeholder="description"
              rows={10}
              {...register("Description", { required: false })}
            />
            {/* <RichTextEditor value={value} onChange={onChange} /> */}
            <input
              className="rounded-lg hidden px-5 py-5 w-full mb-5"
              placeholder="channel"
              type="text"
              {...register("Channel", { required: false })}
            />
            <input
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
              placeholder="tags"
              type="text"
              {...register("Tags", { required: true })}
            />

            <input
              className="rounded-lg px-5 py-5 w-full mb-5 text-hr font-semibold cursor-pointer bg-orange"
              type="submit"
            />
          </form>
        </div>
      ) : (
        <div className="pl-24 lg:pl-72 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
          <form className="w-full px-16" onSubmit={handleSubmit(onSubmit)}>
            <Image
              src={"/src/img/empty.png"}
              width={200}
              height={200}
              loading={"lazy"}
            />
            <h1 className="text-hr text-4xl mb-10 text-center">
              You have no channel!
            </h1>
            <p className="text-hr text-center">
              for upload a video you have to create a channel first.
            </p>
          </form>
        </div>
      )}
    </Layout>
  );
}
