import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RatingStar() {
  return (
    <div className='ratings p-1 mb-4'>
      <FontAwesomeIcon icon={faStar} className='fas icon' />
      <FontAwesomeIcon icon={faStar} className='fas icon' />
      <FontAwesomeIcon icon={faStar} className='fas icon' />
      <FontAwesomeIcon icon={faStar} className='fas icon' />
      <FontAwesomeIcon icon={faStar} className='fas icon me-0' />
    </div>
  )
}

export default RatingStar
