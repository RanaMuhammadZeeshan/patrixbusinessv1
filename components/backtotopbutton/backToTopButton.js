import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function BackToTopButton() {
  return (
    <Link href={'/'} scroll={true}>
      <a className='shadow btn-primary rounded-circle back-to-top'>
        <FontAwesomeIcon className='fas icon' icon={faChevronUp} />
      </a>
    </Link>
  )
}

export default BackToTopButton
