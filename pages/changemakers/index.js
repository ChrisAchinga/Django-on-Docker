import Layout from '@layouts/Layuout'

const ChangeMakers = () => {
  const title = 'Changemakers'
  const description = 'Spotlight to our hardworking community volunteers'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default ChangeMakers
