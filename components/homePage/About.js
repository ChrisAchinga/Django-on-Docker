import { Col, Row, Container } from 'react-bootstrap'
import styles from '@styles/HomeAbout.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <Container className='gap-3'>
        <Row>
          <Col sm={4} className='p-5'>
            <hr />
            <h1 className='text-center'>About</h1>
          </Col>
          <Col sm={8} className='p-5'>
            <p>
              Swahilipot Hub – a Technology, Creatives and Heritage Space, is
              non-profit organization based in Mombasa that focuses on inspiring
              and nurturing entrepreneurs and creatives through networking,
              technical training, support, professional mentoring and coaching.
            </p>

            <p>
              We bring together tech and creative communities, entrepreneurs,
              investors and donors and provide them an opportunity to share
              knowledge, learn, find mentors and expound on ideas that will lead
              to the development of new innovations in Kenya and globally at
              large.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
