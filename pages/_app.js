// This file is being deleted to resolve conflicts between Pages Router and App Router
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nak Muay Media | Muay Thai News & Analysis</title>
        <meta name="description" content="Your source for Muay Thai news, fighter profiles, technique breakdowns, and event coverage." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp; 