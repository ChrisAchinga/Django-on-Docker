import Layout from '@layouts/Layuout'

const TeamMembers = () => {
  const title = 'TeamMembers'
  const description = 'Our Leading Team Members'
  return (
    <Layout title={title} description={description}>
      <main>{title}</main>
    </Layout>
  )
}

export default TeamMembers
