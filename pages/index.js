import Head from 'next/head';
import Header from '@components/Header';
import { useRouter } from 'next/router';

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

  const handleRedirect = () => {
    const fullUrl = getFullUrl(router.query);
    window.location.href = fullUrl;
  };

  return (
    <div className="container">
      <Head>
        <title>UMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="UMA" />
        <p className="description">
          <button itButton="primary" onClick={handleRedirect}><it-icon name="chevron-left" color="white"></it-icon>Ritorna nell'app</button>
        </p>
      </main>
    </div>
  )
}
