import Layout from '@layouts/Layuout'

const ChangeMaker = () => {
  const title = 'Changemaker - Name'
  const description = 'Spotlight to our hardworking community volunteers'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default ChangeMaker
