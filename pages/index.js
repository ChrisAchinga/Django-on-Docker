import { Container } from 'react-bootstrap'
import Layout from '@layouts/Layuout'

const Home = () => {
  const title = 'Home Page'
  const description = 'Swahilipot Hub is a tech and art hub for the community'
  return (
    <Layout title={title} description={description}>
      <main>
        <Container>
        </Container>
      </main>
    </Layout>
  )
}

export default Home