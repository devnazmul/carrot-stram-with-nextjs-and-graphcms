import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { isAuthorLoggedIn } from "../../services";
import styles from "./Login.module.css";

export default function index() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserData") || "false"));
  }, []);
  const router = useRouter();
  user && router.push("/");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    isAuthorLoggedIn(data.email, data.password).then((res) => {
      if (res.status) {
        router.push("/");
      } else {
        alert("Login failed!");
      }
    });
  };

  return (
    <Layout>
      {!user && (
        <div className={styles.container}>
          <form className="w-full px-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.formH1}>Log in </h1>
            <input
              className={styles.input}
              placeholder="Email"
              type="text"
              {...register("email", { required: true })}
            />
            <input
              className={styles.input}
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <Link href={"/"}>
              <h3 className={styles.forgotPass}>Forgot password?</h3>
            </Link>

            <input className={styles.submitBtn} type="submit" />
          </form>
          <h3>
            Haven't any account yet?{" "}
            <Link href={"/signUp"}>
              <span className={styles.highlightText}>Create one.</span>
            </Link>{" "}
          </h3>
        </div>
      )}
    </Layout>
  );
}
