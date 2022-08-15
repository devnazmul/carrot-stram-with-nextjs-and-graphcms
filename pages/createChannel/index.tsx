import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { createChannel, updateChannelStage } from "../../services";
import { genarateRandomSlug } from "../../services/genarateRandomSlug";

type Inputs = {
  example: string;
  exampleRequired: string;
};

function index() {
  const [error, setError] = useState<Object | null>();
  const [userEmail, setUserEmail] = useState<string>();

  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>();
  const router = useRouter();

  useEffect(() => {
    setUserEmail(
      JSON.parse(localStorage.getItem("UserData") || "false")?.email
    );
  }, [userEmail]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setError(errors);
    console.log(errors);

    // set loading true and scroll to top
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    data.slug = genarateRandomSlug(data.channelName, 10);

    console.log(data);

    createChannel(data.slug, data.channelName, data.authEmail).then((res) => {
      updateChannelStage(res).then((response) => {
        console.log(response);
      });
    });
  };

  return (
    <Layout>
      <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
        {userEmail && (
          <form
            className="w-full flex flex-col justify-center items-center px-60"
            onSubmit={handleSubmit(onSubmit)}
            acceptCharset={"utf-8"}
          >
            <h1 className="text-hr text-4xl mb-10 text-center">
              Create Channel
            </h1>
            <input
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
              placeholder="Channel name"
              type="text"
              {...register("channelName", { required: true, maxLength: 80 })}
            />
            <input
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange hidden"
              placeholder="authEmail"
              type="email"
              defaultValue={userEmail}
              {...register("authEmail", { required: true })}
            />
            <input
              className="rounded-lg px-5 py-5 w-full mb-5 text-hr font-semibold cursor-pointer bg-orange"
              type="submit"
              value={"Create"}
            />
          </form>
        )}
      </div>
    </Layout>
  );
}
export default index;
