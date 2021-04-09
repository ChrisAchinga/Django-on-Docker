import { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import ModalBox from '@components/ModalBox'

const BodyCard = ({ title, description, maxNum, ImageRoute, btnText }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <Card>
      <Card.Img variant='top' src={ImageRoute} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Maximum No. of People: {maxNum}</Card.Text>
        <Button variant='primary' onClick={() => setModalShow(true)}>
          {btnText}
        </Button>
        <ModalBox show={modalShow} onHide={() => setModalShow(false)} title={title} maxNum={maxNum}/>
      </Card.Body>
    </Card>
  )
}

BodyCard.defaultProps = {
  title: 'Space Title',
  description: 'A description of the space',
  maxNum: 20,
  ImageRoute: '/workspace0.jpg',
  btnText: 'Space Summary',
}

BodyCard.propTypes = {
  maxNum: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default BodyCard
