import Layout from '@layouts/Layuout'

const News = () => {
  const title = 'News and Updates'
  const description = 'News and Articles from our community'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default News
