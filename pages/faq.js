import Head from 'next/head'
import Header from '@components/Header'
import Menu from '@components/Menu'
import Footer from '@components/Footer'
import Faq from '@components/Faq'
import { Container } from 'react-bootstrap'

const faq = () => {
  return (
    <>
      <Head>
        <title>FAQ | Community Space</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <main>
        <Container>
          <Header
            title='Community Space'
            description='Book or Reserve a Space | Swahilipot Hub'
          />
          <Faq />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default faq
