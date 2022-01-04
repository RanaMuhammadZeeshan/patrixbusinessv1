import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContentWithIconButton({ iconName, content, servicesButton }) {
  return (
    <>
      <button
        type='button'
        className={`${
          servicesButton
            ? 'rounded-pill btn-rounded sm-display-none border-primary'
            : 'rounded-pill btn-rounded sm-display-none'
        }`}
      >
        {content}
        <span>
          <FontAwesomeIcon icon={iconName} className='phoneIcon' />
        </span>
      </button>
    </>
  )
}

export default ContentWithIconButton
