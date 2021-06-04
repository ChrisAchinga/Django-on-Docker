import Link from 'next/link'

const SideBar = () => {
  return (
    <nav id='sidebarMenu' className='d-md-block bg-light sidebar collapse'>
      <div className='position-sticky pt-3'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link href='/admin'>
              <a className='nav-link active' aria-current='page'>
                Dashboard
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/members'>
              <a className='nav-link' >
                Members
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/members/board'>
              <a className='nav-link' >
                Board Members
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/volunteers'>
              <a className='nav-link' >
                Volunteers
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/users'>
              <a className='nav-link' >
                Admin Users
              </a>
            </Link>
          </li>
        </ul>

        <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span>Activities & Updates</span>
        </h6>
        <ul className='nav flex-column mb-2'>
          <li className='nav-item'>
            <Link href='/admin/updates'>
              <a className='nav-link' >
                Updates and News
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/events'>
              <a className='nav-link' >
                Events
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/blogs'>
              <a className='nav-link' >
                Blogs
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/space'>
              <a className='nav-link' >
                Space
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar
