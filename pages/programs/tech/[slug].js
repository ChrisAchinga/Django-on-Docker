import Layout from '@layouts/Layuout'

const TechProgram = () => {
  const title = 'Tech Program Detail'
  const description = 'Program Detail'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default TechProgram
