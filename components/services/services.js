import {
  faCloudUploadAlt,
  faCode,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

import HeadingLine from '../helpers/headingLine'
import ServicesFeature from './servicesFeature'

function Services() {
  return (
    <section id='services' className='services'>
      <div className='container'>
        <div className='row text-center'>
          <h1 className='display-3 fw-bold'>Our Services</h1>
          <HeadingLine servicesHeading={true} />
        </div>

        <div className='row pt-2 pb-2 mt-0 mb-3'>
          <div className='col-md-6 border-right'>
            <div className='bg-white p-3'>
              <h2 className='fw-bold text-capitalize text-center'>
                Our services range from initial design to development anywhere
                anytime
              </h2>
            </div>
          </div>
          <div className='col-md-6 bg-white p-4 text-start'>
            <p className='fw-light'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row d-flex'>
          <ServicesFeature
            iconName={faPaperPlane}
            featureName={'Marketing'}
            featureDescription={
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.'
            }
            illustrationPath={'/images/services/service-1.png'}
          />
        </div>

        <div className='row d-flex flex-row-reverse'>
          <ServicesFeature
            iconName={faCode}
            featureName={'Web Development'}
            featureDescription={
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.'
            }
            illustrationPath={'/images/services/service-2.png'}
            reverseRow={true}
          />
        </div>

        <div className='row d-flex'>
          <ServicesFeature
            iconName={faCloudUploadAlt}
            featureName={'Cloud Hosting'}
            featureDescription={
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.'
            }
            illustrationPath={'/images/services/service-3.png'}
          />
        </div>
      </div>
    </section>
  )
}

export default Services
