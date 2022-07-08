import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";

type Inputs = {
  example: string;
  exampleRequired: string;
};
function index({ slug }: any) {
  const [thumbnail, setThumbnail] = useState<string | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  return (
    <Layout>
      <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
        <form className="w-full pr-8" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-hr text-4xl mb-10 text-center">
            Upload video on{" "}
            <span className="text-orange">{slug.split("-").join(" ")}</span>
          </h1>
          <input
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="Title"
            type="text"
            {...register("Title", { required: true, maxLength: 80 })}
          />
          <span className="flex flex-col lg:flex-row justify-between items-center">
            <label
              style={{
                height: 196,
                width: 348,
              }}
              htmlFor="ut"
              title="Upload Thumbnail"
              className="bg-hr cursor-pointer text-6xl text-orange border-4 border-orange  rounded-lg mb-5 justify-center items-center flex overflow-hidden"
            >
              <Image
                alt={"profile_pic"}
                loading={"lazy"}
                src={`${
                  thumbnail
                    ? thumbnail
                    : "https://i.ibb.co/qWvBRhc/001-photo.png"
                }`}
                height={thumbnail ? 196 : 50}
                width={thumbnail ? 348 : 50}
                objectFit={thumbnail ? "cover" : "cover"}
              />
            </label>
            <label
              style={{
                height: 196,
                width: 348,
              }}
              htmlFor="uv"
              title="Upload Video"
              className="bg-hr cursor-pointer text-6xl text-orange border-4 border-orange rounded-lg mb-5 justify-center items-center flex"
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
              {...register("Thumbnail", {
                onChange: (e) => {
                  setThumbnail(URL.createObjectURL(e.target.files[0]));
                },
                required: true,
              })}
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
    </Layout>
  );
}
export async function getServerSideProps({ query }: any) {
  const { slug } = query;
  return {
    props: {
      slug,
    },
  };
}
export default index;
