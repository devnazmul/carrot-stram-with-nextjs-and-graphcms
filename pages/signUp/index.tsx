import Image from "next/image";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <Layout>
      <div className="pl-24 lg:pl-72 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
        <form className="w-full px-16" onSubmit={handleSubmit(onSubmit)}>
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
            id="profilePic"
            className="hidden"
            placeholder="Profile Picture"
            type="file"
            {...register("profilePic", { required: true })}
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

          <input
            className="rounded-lg px-5 py-5 w-full mb-5 bg-hr text-orange"
            placeholder="Email"
            type="text"
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
