import { Container, Row, Button } from 'react-bootstrap'
import Image from 'next/image'

const HeroSection = ({ title, description }) => {
  return (
    <Container className='col-xxl-8 px-4 py-5'>
      <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
          <Image
            src='/workspace0.jpg'
            className='d-block mx-lg-auto img-fluid'
            width={700}
            height={500}
            loading='lazy'
          />
        </div>
        <div className='col-lg-6'>
          <h1 className='display-5 fw-bold lh-1 mb-3'>SwahiliPot Hub</h1>
          <p className='lead'>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <Button className='btn-primary btn-lg px-4 me-md-2'>Events</Button>
            <Button className='btn-secondary btn-lg px-4'>
              Space
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default HeroSection
