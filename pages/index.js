import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript">
          window.location.href = "https://d26paarabrky6y.cloudfront.net/";
        </script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Se non vieni reindirizzato automaticamente, clicca <a href="https://d26paarabrky6y.cloudfront.net/">qui</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
