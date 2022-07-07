import { Orbit } from "@uiball/loaders";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { submitAuthor } from "../../middleware/submitAuthor";

export default function index() {
  const [imageUrl, setImageUrl] = useState<string | null>();
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: any) => {
    // set loading true and scroll to top
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // post formData object to api/author
    submitAuthor(data).then((res: any) => {
      setLoading(false);
      setSubmitted(true);
      localStorage.setItem("UserData", JSON.stringify(res));
      setTimeout(() => {
        router.push("/");
      }, 2000);
    });
  };

  return (
    <Layout>
      <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col justify-center items-center">
        <form
          className="relative w-full pr-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-orange text-4xl mb-10 text-center">
            Create an account
          </h1>
          <span className="flex w-full justify-center items-center">
            <label
              htmlFor="profilePic"
              title="Upload Profile Picture"
              className="bg-hr cursor-pointer overflow-hidden w-44 text-6xl text-orange border-4 border-orange h-44 rounded-full mb-5 justify-center items-center flex"
            >
              <Image
                alt={"profile_pic"}
                loading={"lazy"}
                src={`${
                  imageUrl ? imageUrl : "https://i.ibb.co/qWvBRhc/001-photo.png"
                }`}
                height={imageUrl ? 176 : 50}
                width={imageUrl ? 176 : 50}
                objectFit={imageUrl ? "cover" : "cover"}
              />
            </label>
          </span>
          <input
            type="file"
            {...register("fileName", {
              onChange: (e) => {
                setImageUrl(URL.createObjectURL(e.target.files[0]));
              },
              required: true,
            })}
            className="hidden"
            id="profilePic"
          />
          <div className="flex justify-between items-center">
            <input
              className="w-5/12 rounded-lg px-5 py-5 mb-5 bg-hr text-orange"
              placeholder="Full Name"
              type="text"
              {...register("fullName", { required: true })}
            />
            <input
              className="w-5/12 rounded-lg px-5 py-5 mb-5 bg-hr text-orange"
              placeholder="Username"
              type="text"
              {...register("username", { required: true })}
            />
          </div>
          {loading && (
            <div className="absolute top-1/3 right-0 left-0 mx-auto max-w-max">
              <Orbit size={70} speed={1.5} color="#f96c0f" />
            </div>
          )}
          <input
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <textarea
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="About"
            rows={5}
            {...register("about", { required: false })}
          />

          <input
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
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
