import Head from 'next/head';
import Header from '@components/Header';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <title>Continua su UMA App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background-blur"></div>
      <main className="content flip-container">
        <div className="flipper" onClick={handleRedirect}>
          {/* Lato anteriore: Icona */}
          <div className="front">
            <img src="/faviconUMA.png" alt="icon" className="button-icon" />
          </div>
          {/* Lato posteriore: Testo */}
          <div className="back">
            <Header title="Entra" />
          </div>
        </div>
      </main>
    </div>
  )
}
