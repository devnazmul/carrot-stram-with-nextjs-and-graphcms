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
import styles from "./CreateChannel.module.css";

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
        <div className={styles.container}>
          {loading && (
            <div className={styles.loadingContainer}>
              <div
                className={styles.loadingSpinner}
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {
            <form
              className={`${styles.form} ${
                userEmail === undefined ? "hidden" : "flex"
              }`}
              onSubmit={handleSubmit(onSubmit)}
              acceptCharset={"utf-8"}
            >
              <h1 className={styles.h1}>Create Channel</h1>
              <input
                className={styles.channelNameInput}
                placeholder="Channel name"
                type="text"
                {...register("channelName", { required: true, maxLength: 80 })}
              />
              <input
                className={styles.emailInput}
                placeholder="authEmail"
                type="email"
                defaultValue={userEmail}
                {...register("authEmail", { required: true })}
              />
              <input
                className={styles.submitBtn}
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
