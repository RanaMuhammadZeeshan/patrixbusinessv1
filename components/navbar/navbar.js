import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import Head from 'next/head'
import Link from 'next/link'
import ContentWithIconButton from '../buttons/contentWithIconButton'

function Navbar({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <nav className='navbar navbar-expand-lg navbar-dark menu shadow fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img
              src='/images/logo.png'
              alt='brand logo'
              className='img-fluid'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link href={'#0'}>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'#0'}>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Services
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'#0'}>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Testimonials
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'#0'}>
                  <a className='nav-link active' aria-current='page' href='#'>
                    FAQ
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'#0'}>
                  <a className='nav-link active' aria-current='page' href='#'>
                    portfolio
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'#0'}>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <ContentWithIconButton
              iconName={faPhoneAlt}
              content={'+0 1234567890'}
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
