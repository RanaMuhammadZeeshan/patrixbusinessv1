import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function ContactBox({ iconName, title, subtitle }) {
  return (
    <div className='d-md-block d-lg-flex d-flex'>
      <div className='contact-box__icon'>
        <FontAwesomeIcon icon={iconName} className='fas icon' />
      </div>
      <div className='contact-box__info'>
        <Link href={'#0'}>
          <a className='contact-box__info--title'>{title}</a>
        </Link>
        <p className='contact-box__info--subtitle'>{subtitle}</p>
      </div>
    </div>
  )
}

export default ContactBox
