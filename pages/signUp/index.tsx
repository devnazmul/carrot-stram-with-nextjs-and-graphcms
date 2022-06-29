import { Orbit } from "@uiball/loaders";
import { gql, GraphQLClient } from "graphql-request";
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

  const test = (data: any) => {
    const GraphQLclient = new GraphQLClient(
      `https://api-ap-south-1.graphcms.com/v2/ckyyobxtf05dl01zchugfh4jv/master`,
      {
        headers: {
          authorizaton: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQxNTQyNzIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9ja3l5b2J4dGYwNWRsMDF6Y2h1Z2ZoNGp2L21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImFmMDMwZGE2LTNhYzctNDM3MS05NjFmLTJkN2YxYjczYjFjNCIsImp0aSI6ImNremJiMDQyMzJkam4wMXl4aDJuMDdwcWwifQ.4UZABPgtuzDM7e7CeqZFjIlXw8_SFo3Kce1jRuxqoQZ29ED9NbzSiSOFLxNquqDYYTJbhVhRqctIZ1z_A1KJFJAo8LtsBFiMCiT--bQUaLwe3jGAY6HsM8eisxE_ZCiQeIdDgIvX2hwJynkXWNCENNuV0vPYgRDytYQQ_mtxTsnp-iBAdioa4gma_46dl3Kf70OAcTb3DSNCoVVUeDU5ouflq8p7sysR9yHRHKh1KGdFkYO-BQM7QOxes_hIQRqc2ltDwMo1A7bGzRVZEoPwSFas6f7TKbeIBGOgEeKV_sNP8Mx9VvtF64UulnLE1vaQGEShAtwQQ6WVdH9HB2hMG0lhOZJWDdwMblcZlf-w40cjFhvMezY0wMt2-M4TO7h3oaZv31J8K-RMcle6W6FjS_x2S7v7TbG5u37kD-95qRkieq5-udUD8kQUcXp9VfbQk8ZFfKW5W6VQZFCv5pQP0UsHwZrFwniI36ajy0Em7EotrYBdi_jopJa7ArrWbei_tQ7mgCljCDYo4CMfFEUFgkvE3vlkHAV5DD55459yoSPoEDWdVrGLCeGMLw8xKkUVRkqSXhoOL0mlN-5MhRJIFWd-JHsXV8C6Rira9ABCayyx9Q8Yl0dTqS72I8xPGFVU4n2H3_J5-eWvIsGlNYgkmQCd-wdkInDlm6ITJGhWt6U`,
        },
      }
    );
    const query = gql`
      mutation MyMutation {
        publishAuthor(
          where: { id: "cl4yjqklp02dn0bphyk6r7y7b" }
          to: PUBLISHED
        ) {
          email
          avatar {
            url
          }
          fullName
          usename
          about
        }
      }
    `;

    GraphQLclient.request(query).then((response) => {
      console.log(response);
    });
  };

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
