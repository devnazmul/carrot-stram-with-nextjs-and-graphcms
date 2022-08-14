import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { submitVideo } from "../../middleware/submitVideo";

type Inputs = {
  example: string;
  exampleRequired: string;
};

function index({ slug }: any) {
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const genRand = (name: string, len: number) => {
    return `${name}-${Math.random()
      .toString(36)
      .substring(2, len + 2)}-${Math.random()
      .toString(36)
      .substring(2, len + 2)}-${Math.random()
      .toString(36)
      .substring(2, len + 2)}`;
  };

  const onSubmit = (data: any) => {
    // set loading true and scroll to top
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    data.channelSlug = slug;
    data.slug = genRand(data.title, 10);

    // post formData object to api/author
    submitVideo(data).then((res: any) => {
      setLoading(false);
      console.log(res);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    });
  };

  return (
    <Layout>
      <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
        <form
          className="w-full pr-8"
          onSubmit={handleSubmit(onSubmit)}
          acceptCharset={"utf-8"}
        >
          <h1 className="text-hr text-4xl mb-10 text-center">
            Upload video on{" "}
            <span className="text-orange">{slug.split("-").join(" ")}</span>
          </h1>
          <input
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="Title"
            type="text"
            {...register("title", { required: false, maxLength: 80 })}
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
              placeholder="Thumbnail"
              type="file"
              {...register("thumbnail", {
                onChange: (e) => {
                  setThumbnail(URL.createObjectURL(e.target.files[0]));
                },
                required: false,
              })}
            />
            <input
              id="uv"
              className="rounded-lg mt-5 hidden px-5 py-5 w-full mb-5"
              placeholder="videoContent"
              type="file"
              {...register("videoContent", { required: false })}
            />
          </span>

          <textarea
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="description"
            rows={10}
            {...register("description", { required: false })}
          />
          {/* <RichTextEditor value={value} onChange={onChange} /> */}
          <input
            className="rounded-lg hidden px-5 py-5 w-full mb-5"
            placeholder="channel"
            type="text"
            defaultValue={slug}
            {...register("channel", { required: false })}
          />
          {/* <input
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="tags"
            type="text"
            {...register("Tags", { required: false })}
          /> */}
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
