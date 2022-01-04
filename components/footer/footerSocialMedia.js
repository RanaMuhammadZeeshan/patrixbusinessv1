import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function FooterSocialMedia() {
  return (
    <>
      <div className='row py-4 text-center text-white'>
        <div className='col-md-6 col-lg-5 mb-4 mb-md-0'>
          connect with us on social media
        </div>
        <div className='col-md-6 col-lg-7'>
          <Link href={'#0'}>
            <a>
              <FontAwesomeIcon icon={faFacebook} className='fab icon' />
            </a>
          </Link>
          <Link href={'#0'}>
            <a>
              <FontAwesomeIcon icon={faTwitter} className='fab icon' />
            </a>
          </Link>
          <Link href={'#0'}>
            <a>
              <FontAwesomeIcon icon={faGithub} className='fab icon' />
            </a>
          </Link>
          <Link href={'#0'}>
            <a>
              <FontAwesomeIcon icon={faLinkedin} className='fab icon' />
            </a>
          </Link>
          <Link href={'#0'}>
            <a>
              <FontAwesomeIcon icon={faInstagram} className='fab icon' />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FooterSocialMedia
