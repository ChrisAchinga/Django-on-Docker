import { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import ModalBox from '@components/ModalBox'

const BodyCard = ({ title, description, maxNum }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Maximum No. of People: {maxNum}</Card.Text>
        <Button variant='primary' onClick={() => setModalShow(true)}>
          Go somewhere
        </Button>
        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  )
}

BodyCard.defaultProps = {
  title: 'Space Title',
  description: 'A description of the space',
  maxNum: 20,
}

BodyCard.propTypes = {
  maxNum: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default BodyCard
