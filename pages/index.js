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

      <main className="content">
        <Header title="Continua su" />
        <p className="description">
          <Button variant="" onClick={handleRedirect}>
            <div className="button-icon-container">
              <img src="/faviconUMA.png" alt="icon" className="button-icon" />
            </div>
          </Button>{' '}
        </p>
      </main>
    </div>
  )
}
