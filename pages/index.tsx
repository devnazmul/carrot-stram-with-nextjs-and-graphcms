import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

export default function Page() {
  return (
    <div className="bg-primary h-screen text-icon">
      <Head>
        <title>Carrot Stram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
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
