import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import ModalBox from '@components/ModalBox'

const BodyCard = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary' onClick={() => setModalShow(true)}>
          Go somewhere
        </Button>

        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  )
}

export default BodyCard
