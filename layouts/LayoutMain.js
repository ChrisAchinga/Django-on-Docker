import Head from 'next/head'

export default function LayoutMain({ title, children, description }) {
  return (
    <div>
      <Head>
        <title>SPH | {title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  )
}

LayoutMain.defaultProps = {
    title: 'SwahiliPot Hub Website',
    description: 'Empowering the community in tech and art'
}