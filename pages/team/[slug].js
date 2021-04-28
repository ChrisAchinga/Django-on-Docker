import Layout from '@layouts/Layuout'

const Team = () => {
  const title = 'Taem - Name'
  const description = 'Spotlight to our hardworking community volunteers'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default Team
