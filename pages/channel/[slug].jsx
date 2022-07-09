
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";

export default function channel({slug}) {
  return (
    <Layout>
      <Head>
        <title>{slug.split('-').join(' ')} | Carrot Stream</title>
        <meta
          name="description"
          content={`In this page your ${slug.split('-').join(' ')} playlist`}
        />
      </Head>
      <div className="pl-24 lg:pl-72 h-screen w-full flex text-5xl text-gray-600 font-bold flex-col  justify-center items-center">
        <Image alt={'not_found'} loading={'lazy'} src={"/src/img/not-found.png"} width="300px" height="300px" />
        {slug}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({query}) {
  const { slug } = query
  return {
    props: {
      slug
    },
  };
}