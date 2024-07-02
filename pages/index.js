import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;

    if (code) {
      const linkElement = document.getElementById('redirect-link');
      if (linkElement) {
        linkElement.click();
      }
    }
  }, [router.query]);

  const getFullUrl = (code) => {
    const baseUrl = 'https://d26paarabrky6y.cloudfront.net/';
    return `${baseUrl}?code=${code}`;
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
          Se non vieni reindirizzato automaticamente, clicca <a id="redirect-link" href={getFullUrl(router.query.code)}>qui</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
