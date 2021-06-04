import Link from 'next/link'
import LayoutAdmin from '@layouts/LayoutAdmin'

const index = () => {
  return (
    <LayoutAdmin title='Dashboard'>
      <h4 className='text-muted'>Admin and Data Summary</h4>

      {/* list summary */}
      <ul className='list-group list-group-flush'>
        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>Members</div>
            Total Registered Members
          </div>
          <span className='badge bg-primary rounded-pill'>209</span>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>Volunteers</div>
            Active Volunteers
          </div>
          <span className='badge bg-success rounded-pill'>65</span>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>Events</div>
            Number of Upcoming Events
          </div>
          <span className='badge bg-info rounded-pill'>14</span>
        </li>
      </ul>

      {/* table */}
      <div className='container-fluid mt-5'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Entity</th>
              <th scope='col'>Last Added/created</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Members</td>
              <td>03/04/2021</td>
              <td>Running</td>
            </tr>
            <tr>
            <th scope='row'>2</th>
              <td>Board Members</td>
              <td>03/04/2021</td>
              <td>Running</td>
            </tr>
            <tr>
            <th scope='row'>3</th>
              <td>Volunteers</td>
              <td>03/04/2021</td>
              <td>Running</td>
            </tr>
            <tr>
            <th scope='row'>4</th>
              <td>Blogs</td>
              <td>03/04/2021</td>
              <td>Running</td>
            </tr>
            <tr>
            <th scope='row'>5</th>
              <td>News</td>
              <td>03/04/2021</td>
              <td>Running</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutAdmin>
  )
}

export default index
