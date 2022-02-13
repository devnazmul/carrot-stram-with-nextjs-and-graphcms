import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";
import { getVideosForHomePage } from "../services";

export const getStaticProps: GetStaticProps = async () => {
  const videos = (await getVideosForHomePage()) || [];
  return { props: { videos } };
};

interface Props {
  videos: Array<object>;
}

export default function Page({ videos }: Props) {
  return (
    <div className="bg-primary h-screen text-icon">
      <Head>
        <title>Carrot Stram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main videos={videos} />
    </div>
  );
}
Page.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};
