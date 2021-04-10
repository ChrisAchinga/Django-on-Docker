import Head from 'next/head'
import Header from '@components/Header'
import Menu from '@components/Menu'
import Footer from '@components/Footer'
import { Container, Accordion, Card } from 'react-bootstrap'

const faq = () => {
  let descriptionText =
    'Morbi blandit aptent. Cursus habitant sociis proin ut natoque cubilia habitasse. At. Maecenas felis convallis platea neque litora malesuada dis parturient dapibus. Sociis Platea adipiscing. Suspendisse mollis. Senectus aliquam inceptos Maecenas semper natoque est inceptos fames condimentum potenti vestibulum aptent pharetra curabitur lacus nam ultricies lacus morbi vel feugiat libero.'
  return (
    <>
      <Head>
        <title>FAQ | Community Space</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <main>
        <Container>
          <Header
            title='Frequently Asked Questions about Community Space'
            description='Booking or Reserving a space at Swahilipot Hub'
          />

          <div>
            <Accordion defaultActiveKey='0'>
              <div className='accordion-item'>
                <Accordion.Toggle
                  as={Card.Header}
                  className='text-center align-item-center'
                  eventKey='0'
                >
                  Reserving a Spot at our Community Space
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <div className='accordion-body'>
                    <strong>Reserving a community space</strong> 
                    
                    <hr />
                    {descriptionText}
                  </div>
                </Accordion.Collapse>
              </div>
              <div className='accordion-item'>
                <Accordion.Toggle
                  as={Card.Header}
                  className='text-center align-item-center'
                  eventKey='1'
                >
                  Booking the Multipurpose Hall
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <div className='accordion-body'>
                    <strong>Booking the Multipurpose Hall</strong>
                    <hr />
                    {descriptionText}
                  </div>
                </Accordion.Collapse>
              </div>
              <div className='accordion-item'>
                <Accordion.Toggle
                  as={Card.Header}
                  className='text-center align-item-center'
                  eventKey='2'
                >
                  Booking the Boardroom
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='2'>
                  <div className='accordion-body'>
                    <strong>Booking the boardroom</strong>
                    <hr />
                    {descriptionText}
                  </div>
                </Accordion.Collapse>
              </div>
              <div className='accordion-item'>
                <Accordion.Toggle
                  as={Card.Header}
                  className='text-center align-item-center'
                  eventKey='3'
                >
                  Covid-19 Regulations
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='3'>
                  <div className='accordion-body'>
                    <strong>Covid-19 Regulations</strong>
                    <hr />
                    {descriptionText}
                  </div>
                </Accordion.Collapse>
              </div>
              <div className='accordion-item'>
                <Accordion.Toggle
                  as={Card.Header}
                  className='text-center align-item-center'
                  eventKey='4'
                >
                  Joining as a Community Member/Volunteer
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='4'>
                  <div className='accordion-body'>
                    <strong>Joining as a Community Member/Volunteer</strong>
                    <hr />
                    {descriptionText}
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default faq
