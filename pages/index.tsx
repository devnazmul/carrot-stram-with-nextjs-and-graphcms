import Head from "next/head";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div className="bg-primary h-screen text-icon">
      <Head>
        <title>Med 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
