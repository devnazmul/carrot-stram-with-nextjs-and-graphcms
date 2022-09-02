import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import {
  createChannel,
  deleteChannel,
  updateAuthorStage,
  updateChannelStage,
} from "../../services";
import { genarateRandomSlug } from "../../services/genarateRandomSlug";

type Inputs = {
  example: string;
  exampleRequired: string;
};

function index() {
  const [error, setError] = useState<Object | null>();
  const [userEmail, setUserEmail] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [authSlug, setAuthSlug] = useState("");
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
    // set loading true and scroll to top
    setLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    data.slug = genarateRandomSlug(data.channelName, 10);

    createChannel(data.slug, data.channelName, data.authEmail).then((res) => {
      updateChannelStage(res)
        .then((authID) => {
          if (authID) {
            updateAuthorStage(authID).then((auth) => {
              if (auth) {
                // setLoading(false);
                router.push(`/channel/${data.slug}`);
              }
            });
          }
        })
        .catch((err) => {
          if (err) {
            deleteChannel(data.slug).then((deleteResult) => {
              setLoading(false);
            });
          }
        });
    });
  };

  return (
    <Layout>
      {userEmail !== undefined && (
        <div className="relative pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 h-full w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
          {loading && (
            <div className="absolute flex justify-center items-center bg-black w-1/2 h-full bg-opacity-50 rounded-xl">
              <div
                className="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-orange rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {
            <form
              className={`w-full flex-col justify-center items-center px-60 ${
                userEmail === undefined ? "hidden" : "flex"
              }`}
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
          }
        </div>
      )}
    </Layout>
  );
}
export default index;
