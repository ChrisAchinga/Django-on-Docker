import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '@components/Header'
import Menu from '@components/Menu'
import Body from '@components/Body'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Community Space</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <meta name="description" content={description} /> */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} /> */}
      </Head>

      <Menu />
      <main>
        <Container>
          <Header
            title='Community Space'
            description='Book or Reserve a Space'
          />
          <Body />
        </Container>
      </main>

      <Footer />
    </div>
  )
}
