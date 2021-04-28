import Layout from '@layouts/Layuout'

const SingleNews = () => {
  const title = 'News Title'
  const description = 'Read here'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default SingleNews
