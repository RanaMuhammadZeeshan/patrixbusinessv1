import {
  faEnvelopeOpen,
  faMapMarked,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import ContactBox from './contactBox'
import FooterAboutCompany from './footerAboutCompany'
import FooterSocialMedia from './footerSocialMedia'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-lg-4 contact-box pt-1'>
            <ContactBox
              iconName={faPhoneVolume}
              title={'+1 234567890'}
              subtitle={'Mon-Fri 9am-6pm'}
            />
          </div>
          <div className='col-md-4 col-lg-4 contact-box pt-1'>
            <ContactBox
              iconName={faEnvelopeOpen}
              title={'info@domain.com'}
              subtitle={'Online Support'}
            />
          </div>
          <div className='col-md-4 col-lg-4 contact-box pt-1'>
            <ContactBox
              iconName={faMapMarked}
              title={'Islamabad, Pakistan'}
              subtitle={'PK 12345,Pakistan'}
            />
          </div>
        </div>
      </div>

      <div className='footer-sm' style={{ backgroundColor: '#212121' }}>
        <div className='container'>
          <FooterSocialMedia />
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row text-white justify-content-center mt-3 pb-3'>
          <div className='col-12 col-sm-6 col-lg-6 mx-auto'>
            <h5 className='text-capitalize fw-bold'>Company name</h5>
            <hr
              className='bg-white d-inline-block mb-4'
              style={{ width: '60px', height: '2px' }}
            />
            <p className='lh-lg'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          <div className='col-12 col-sm-6 col-lg-2 mb-4 mx-auto'>
            <FooterAboutCompany heading={'Products'} />
          </div>
          <div className='col-12 col-sm-6 col-lg-2 mb-4 mx-auto'>
            <FooterAboutCompany heading={'Useful links'} />
          </div>
          <div className='col-12 col-sm-6 col-lg-2 mb-4 mx-auto'>
            <FooterAboutCompany heading={'contact'} />
          </div>
        </div>
      </div>

      <div className='footer-bottom pt-5 pb-5'>
        <div className='container'>
          <div className='row text-center text-white'>
            <div className='col-12'>
              <div className='footer-bottom__copyright'>
                &copy; Copyright 2021
                <Link href={'#0'}>
                  <a> Multi-purpose Company </a>
                </Link>
                | Created by{' '}
                <Link href={'#0'}>
                  <a>Zeeshan</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
