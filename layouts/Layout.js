import Head from 'next/head'
import Navmenu from '@components/Navmenu'
import MasterHead from '@components/MasterHead'
import Footer from '@components/Footer'

export default function Layout({ title, children, description }) {
  return (
    <div>
      <Head>
        <title>SPH | {title}</title>
        <meta name='description' content={description} />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Navmenu />
      <MasterHead />
      <main className='py-5'>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'SwahiliPot Hub Website',
  description: 'Empowering the community in tech and art',
}
