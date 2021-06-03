import { FaRegStar } from 'react-icons/fa'
import { Col, Row, Container, Card } from 'react-bootstrap'

const InnerCard = () => {
  return (
    <Card className='h-100'>
      <Card.Body>
        <Card.Title>
          <FaRegStar />
        </Card.Title>
        <Card.Text>Text</Card.Text>
      </Card.Body>
    </Card>
  )
}

const MemberBenefit = () => {
  return (
    <Container>
      <Row>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <InnerCard />
        </Col>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <InnerCard />
        </Col>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <InnerCard />
        </Col>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <InnerCard />
        </Col>
      </Row>
    </Container>
  )
}

export default MemberBenefit
