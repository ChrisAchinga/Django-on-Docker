import { Button } from 'react-bootstrap'
import styles from '@styles/MasterHead.module.css'

const MasterHead = () => {
  return (
    <header className={styles.masthead}>
      <div class='container h-100'>
        <div class='row h-100 align-items-center'>
          <div class='col-12 text-center'>
            <h1 class='font-weight-light'>
              Vertically Centered Masthead Content
            </h1>
            <p class='lead'>A great starter layout for a landing page</p>
            <Button variant='outline-primary' size="lg" block>Primary</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MasterHead
