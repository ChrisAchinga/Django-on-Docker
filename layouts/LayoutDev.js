import Head from 'next/head'

export default function LayoutDev({ title, children, description }) {
  return (
    <div>
      <Head>
        <title>SPH | {title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Developers Zone and Using Our APIs
      {children}
    </div>
  )
}

LayoutDev.defaultProps = {
    title: 'SwahiliPot Hub Developers API',
    description: 'Improvind Tech'
}