import Link from 'next/link'
import LayoutAdmin from '@layouts/LayoutAdmin'

const index = () => {
  return (
    <LayoutAdmin title='Dashboard'>
      <h4 className='text-muted'>Admin and Data Summary</h4>

      <ul className='list-group list-group-flush'>
        <li class='list-group-item d-flex justify-content-between align-items-start'>
          <div class='ms-2 me-auto'>
            <div class='fw-bold'>Members</div>
            Total Registered Members
          </div>
          <span class='badge bg-primary rounded-pill'>209</span>
        </li>
        <li class='list-group-item d-flex justify-content-between align-items-start'>
          <div class='ms-2 me-auto'>
            <div class='fw-bold'>Volunteers</div>
            Active Volunteers
          </div>
          <span class='badge bg-success rounded-pill'>65</span>
        </li>
        <li class='list-group-item d-flex justify-content-between align-items-start'>
          <div class='ms-2 me-auto'>
            <div class='fw-bold'>Events</div>
            Number of Upcoming Events
          </div>
          <span class='badge bg-info rounded-pill'>14</span>
        </li>
      </ul>

      
    </LayoutAdmin>
  )
}

export default index
