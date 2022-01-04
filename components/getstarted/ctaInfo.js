import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CtaInfo() {
  return (
    <div className='cta-info w-100'>
      <h4 className='display-4 fw-bold'>100% Satisfaction Guaranteed</h4>
      <p className='lh-lg'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
      </p>
      <h3 className='display-3--brief'>What will be the next step?</h3>
      <ul className='cta-info__list'>
        <li>
          <FontAwesomeIcon icon={faCheck} className='fas icon' /> We&apos;ll
          prepare the proposal
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className='fas icon' /> we&apos;ll
          discuss it together
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className='fas icon' /> let&apos;s
          start the discussion
        </li>
      </ul>
    </div>
  )
}

export default CtaInfo
