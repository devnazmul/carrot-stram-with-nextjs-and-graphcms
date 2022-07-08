import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { isAuthorLoggedIn } from "../../services";

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
        <div className="pl-20 sm:pl-28 md:pl-40 lg:pl-56 xl:pl-60 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
          <form className="w-full px-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-orange text-4xl mb-10 text-center">Log in </h1>
            <input
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
              placeholder="Email"
              type="text"
              {...register("email", { required: true })}
            />

            <input
              className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <Link href={"/"}>
              <h3 className="text-sm mb-5 text-orange cursor-pointer">
                Forgot password?
              </h3>
            </Link>

            <input
              className="rounded-lg px-5 py-5 w-full mb-5 text-hr font-semibold cursor-pointer bg-orange"
              type="submit"
            />
          </form>
          <h3>
            Haven't any account yet?{" "}
            <Link href={"/signUp"}>
              <span className="text-orange cursor-pointer">Create one.</span>
            </Link>{" "}
          </h3>
        </div>
      )}
    </Layout>
  );
}
