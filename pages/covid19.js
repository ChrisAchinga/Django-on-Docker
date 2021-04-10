import Head from 'next/head'
import Header from '@components/Header'
import Menu from '@components/Menu'
import Footer from '@components/Footer'
import { Container } from 'react-bootstrap'

const covid19 = () => {
  return (
    <>
      <Head>
        <title>Covid-19</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <main>
        <Container>
          <Header
            title='Community Space'
            description='Book or Reserve a Space | Swahilipot Hub'
          />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default covid19
