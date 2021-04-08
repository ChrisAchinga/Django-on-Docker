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
