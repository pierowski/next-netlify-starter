import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const getFullUrl = (params) => {
    const baseUrl = 'https://d26paarabrky6y.cloudfront.net/';
    let paramsString = '?';

    Object.entries(params).forEach((param) => {
      paramsString += param[0] + '=' + param[1] + '&';
    });

    paramsString = paramsString.substring(0, paramsString.length - 2);
    console.log(paramsString);

    return decodeURIComponent(`${baseUrl}${paramsString}`);
  };

  useEffect(() => {
    document.getElementById('redirect-link')?.click();
  }, [router.query]);

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
