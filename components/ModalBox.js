import { Modal, Button, Container, Alert } from 'react-bootstrap'

const ModalBox = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Communtiy Space
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <Container>
          <Alert variant='success'>
            <Alert.Heading>Status: Available</Alert.Heading>
            <p>
              12 People Remaining
            </p>
            <hr />
            <p className='mb-0'>
              Space Available for Booking | COVID-19 Protocols Observed
            </p>
          </Alert>
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary">Book Space</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalBox
