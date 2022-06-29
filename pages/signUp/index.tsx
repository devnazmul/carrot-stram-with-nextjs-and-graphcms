import { Orbit } from "@uiball/loaders";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { submitAuthor } from "../../middleware/submitAuthor";

export default function index() {
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
      setTimeout(() => {
        router.push("/");
      }, 5000);
    });
  };

  return (
    <Layout>
      <div className="pl-24 lg:pl-72 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
        <form
          className="relative w-full px-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-orange text-4xl mb-10 text-center">
            Create an account
          </h1>
          <span className="flex w-full justify-center items-center">
            <label
              htmlFor="profilePic"
              title="Upload Profile Picture"
              className="bg-hr cursor-pointer w-44 text-6xl text-orange border-4 border-orange h-44 rounded-full mb-5 justify-center items-center flex"
            >
              <Image
                src={"https://i.ibb.co/qWvBRhc/001-photo.png"}
                height={50}
                width={50}
              />
            </label>
          </span>
          <input
            type="file"
            {...register("fileName", { required: true })}
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
