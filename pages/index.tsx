import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";
import { getVideosForHomePage } from "../services";

export const getServerSideProps: GetServerSideProps = async () => {
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
        <meta charSet={"UTF-8"} />
        <meta
          name="keywords"
          content="stream, video, devnazmul, carrot_stream, carrot stream, video streaming app with next js"
        />
        <meta name="author" content="Md Nazmul Islam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carrot Stream</title>
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
