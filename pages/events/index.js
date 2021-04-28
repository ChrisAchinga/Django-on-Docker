import Layout from '@layouts/Layuout'

const Events = () => {
  const title = 'Our Events'
  const description = 'Events'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default Events
