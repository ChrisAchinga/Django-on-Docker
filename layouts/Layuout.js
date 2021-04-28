import Head from 'next/head'
import {Container} from 'react-bootstrap'
import HeroSection from '@components/HeroSection'
import Menu from '@components/Menu'
import Footer from '@components/Footer'

export default function Home({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>Community Space | {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:url'
          content='https://community-space.netlify.app/'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content='https://source.unsplash.com/6bKpHAun4d8'
        />
      </Head>
      <Menu />
      <main>
        <HeroSection />
        <Container>
        {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
