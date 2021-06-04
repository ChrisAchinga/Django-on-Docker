import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'
import styles from '@styles/admin.module.css'
import SideBar from '@components/admin/SideBar'
import TopMenu from '@components/admin/TopMenu'

const LayoutAdmin = ({ children, title }) => {
  return (
    <div className={styles.admin}>
      <Head>
        <title>SPH Admin | {title}</title>
      </Head>
      <TopMenu />
      <div className='container-fluid'>
        <Row>
          <Col md={3} lg={2}>
            <SideBar />
          </Col>
          <Col md={9} lg={10}>
            <main className='ms-sm-auto px-md-4'>
              <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                <h1 className='h2'>{title}</h1>
                <div className='btn-toolbar mb-2 mb-md-0'>
                  <div className='btn-group me-2'>
                    <button
                      type='button'
                      className='btn btn-sm btn-outline-primary'
                    >
                      Share
                    </button>
                    <button
                      type='button'
                      className='btn btn-sm btn-outline-primary'
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type='button'
                    className='btn btn-sm btn-outline-primary dropdown-toggle'
                  >
                    <span data-feather='calendar'></span>
                    This week
                  </button>
                </div>
              </div>

              {children}
            </main>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LayoutAdmin
