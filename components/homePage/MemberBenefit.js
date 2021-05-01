import { FaRegStar } from 'react-icons/fa'
import { Col, Row, Container, Card } from 'react-bootstrap'

const MemberBenefit = () => {
  return (
    <Container>
      <Row>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title>
                <FaRegStar />
              </Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title>
                <FaRegStar />
              </Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title>
                <FaRegStar />
              </Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} className='mb-4'>
          <Card className='h-100'>
            <Card.Body>
              <Card.Title>
                <FaRegStar />
              </Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MemberBenefit
