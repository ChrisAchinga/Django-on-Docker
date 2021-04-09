import { Container, Row, Col } from 'react-bootstrap'
import BodyCard from '@components/BodyCard'

const Body = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={4} className='p-2'><BodyCard /></Col>
        <Col md={4} className='p-2'><BodyCard /></Col>
        <Col md={4} className='p-2'><BodyCard /></Col>
      </Row>
    </Container>
  )
}

export default Body
