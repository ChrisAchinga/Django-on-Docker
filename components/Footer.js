import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className='my-5 pt-5 text-muted text-center text-small'>
        <p className='mb-1'>Community Space &copy; {currentYear} ChrisDevCode</p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link href='/'>
              <a>Events</a>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link href='/'>
              <a>Support</a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}
