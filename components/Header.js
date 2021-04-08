const Header = ({ title, description }) => {
  return (
    <header className='mt-3 align-items-center'>
      <h1 className='text-center'>{title}</h1>
      <p className='text-muted text-center'>{description}</p>
    </header>
  )
}

export default Header
