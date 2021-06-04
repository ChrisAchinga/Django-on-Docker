const SideBar = () => {
  return (
    <nav id='sidebarMenu' className='d-md-block bg-light sidebar collapse'>
       <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Members
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Board Members
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Volunteers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Admin Users
            </a>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Activities & Updates</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Updates and News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Space
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar
