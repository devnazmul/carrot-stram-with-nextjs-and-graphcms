import Image from "next/image";
import Layout from "../../components/Layout/Layout";

export default function index() {
  return (
    <Layout>
      <div className="pl-24 lg:pl-72 h-screen w-full flex text-5xl text-gray-600 font-bold flex-col  justify-center items-center">
        <Image
          alt={"not_found"}
          loading={"lazy"}
          src={"/src/img/not-found.png"}
          width="300px"
          height="300px"
        />
        No data found!
      </div>
    </Layout>
  );
}
