import Layout from '@layouts/Layuout'

const Gallery = () => {
  const title = 'Gallery'
  const description = 'Images and Videos'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default Gallery
