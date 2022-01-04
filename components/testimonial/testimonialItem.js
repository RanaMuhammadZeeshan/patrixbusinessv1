import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RatingStar from './ratingStar'

function TestimonialItem({ clientPath, clientName, review, occupation }) {
  return (
    <>
      <div className='testimonials__card'>
        <div className='lh-lg'>
          <FontAwesomeIcon icon={faQuoteLeft} className='fas icon' />
          {review}
          <FontAwesomeIcon icon={faQuoteRight} className='fas icon' />
          <RatingStar />
        </div>
      </div>

      <div className='testimonials__picture'>
        <img
          src={clientPath}
          alt={`${clientName} image`}
          className='img-fluid rounded-circle'
        />
      </div>

      <div className='testimonials__name'>
        <h3>{clientName}</h3>
        <p className='fw-light'>{occupation}</p>
      </div>
    </>
  )
}

export default TestimonialItem
