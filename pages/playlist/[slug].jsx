
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import styles from './Playlist.module.css';
export default function playlist({slug}) {
  
  return (
    <Layout>
      <Head>
        <title>{slug.split('-').join(' ')} | Carrot Stream</title>
        <meta
          name="description"
          content={`In this page your ${slug.split('-').join(' ')} playlist`}
        />
      </Head>
      <div className={styles.notFound}>
        <Image alt={'not_found'} loading={'lazy'} src={"/src/img/not-found.png"} width="300px" height="300px" />
        No data found!
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