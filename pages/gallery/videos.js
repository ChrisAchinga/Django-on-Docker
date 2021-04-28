import Layout from '@layouts/Layuout'

const Videos = () => {
  const title = 'Videos'
  const description = 'Our Videos and Shows'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default Videos
