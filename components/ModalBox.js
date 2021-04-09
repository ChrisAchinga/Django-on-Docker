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
          <Alert variant={props.RemainingNum === 0 ? 'danger' : 'success'}>
            <Alert.Heading>
              Status(Availability for the next 24hrs): {props.RemainingNum === 0 ? 'Fully Booked' : 'Available'}
            </Alert.Heading>
            <p>
              {props.RemainingNum} People Remaining (Maximum: {props.maxNum}{' '}
              people)
            </p>
            <hr />
            <p className='mb-0'>
              {props.RemainingNum === 0 ? 'Community Space Fully Booked' : 'Space Available for Booking'} | COVID-19 Protocols Observed
            </p>
          </Alert>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' disabled={props.RemainingNum === 0}>
          Book Space
        </Button>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalBox
