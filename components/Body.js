import { Container, Row, Col } from 'react-bootstrap'
import BodyCard from '@components/BodyCard'

const Body = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={4} className='p-2'>
          <BodyCard
            title='Social Hall'
            description='Medium sized hall for events and functions and even trainings'
            maxNum={40}
            RemainingNum={30}
            ImageRoute='/hall.jpg'
          />
        </Col>
        <Col md={4} className='p-2'>
          <BodyCard
            title='Working Space'
            description='A Communty space with a condusive work environment for your personal work/stuff'
            maxNum={15}
            RemainingNum={1}
            ImageRoute='/workspace0.jpg'
          />
        </Col>
        <Col md={4} className='p-2'>
          <BodyCard
            title='BoardRoom'
            description='A Place to hold your coporate meetings and events'
            maxNum={8}
            RemainingNum={0}
            ImageRoute='/boardroom0.jpg'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Body
