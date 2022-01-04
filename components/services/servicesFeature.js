import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContentWithIconButton from '../buttons/contentWithIconButton'

function ServicesFeature({
  iconName,
  featureName,
  featureDescription,
  illustrationPath,
  reverseRow,
}) {
  return (
    <>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 services mt-4'>
        <div className='services__content'>
          <FontAwesomeIcon icon={iconName} className='icon d-block' />
          <h3 className='display-3--title mt-1 '>{featureName}</h3>
          <p className='lh-lg'>{featureDescription}</p>
          <ContentWithIconButton
            iconName={faArrowRight}
            content={'Learn more'}
            servicesButton={true}
          />
        </div>
      </div>

      <div
        className={`${
          reverseRow
            ? 'col-xs-12 col-sm-12 col-md-6 col-lg-6 services mt-4 text-start'
            : 'col-xs-12 col-sm-12 col-md-6 col-lg-6 services mt-4 text-end'
        }`}
      >
        <div className='services__pic'>
          <img
            src={illustrationPath}
            className='img-fluid'
            alt={`${featureName} illustration`}
          />
        </div>
      </div>
    </>
  )
}

export default ServicesFeature
