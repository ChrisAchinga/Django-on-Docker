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
        <meta
          property='og:url'
          content='https://community-space.netlify.app/'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Community Space' />
        <meta
          property='og:description'
          content='Reserve your spot at your community space to help control covid-19 spread'
        />
        <meta
          property='og:image'
          content='https://source.unsplash.com/6bKpHAun4d8'
        />
      </Head>

      <Menu />
      <main>
        <Container>
          <Header
            title='Community Space'
            description='Book or Reserve a Space | Swahilipot Hub'
          />
          <Body />
        </Container>
      </main>

      <Footer />
    </div>
  )
}
