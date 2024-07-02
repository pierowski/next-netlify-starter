import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const getFullUrl = (code) => {
    debugger;
    const baseUrl = 'https://d26paarabrky6y.cloudfront.net/';
    return `${baseUrl}${JSON.stringify(code)}`;
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Se non vieni reindirizzato automaticamente, clicca <a id="redirect-link" href={getFullUrl(router.query)}>qui</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
