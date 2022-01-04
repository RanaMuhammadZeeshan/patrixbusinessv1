import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ReactPlayer from 'react-player'

import ContentWithIconButton from '../buttons/contentWithIconButton'

function Intro() {
  return (
    <section id='home' className='intro-section'>
      <div className='container'>
        <div className='row align-items-center text-white'>
          <div className='col-md-6 intros'>
            <h1 className='display-2'>
              <span className='display-2-intro'>Hey!, I&apos;m Patrix </span>
              <span className='display-2-description lh-base'>
                This is multipurpose responsive layout created with bootstrap
                v5. (Place your description here)
              </span>
            </h1>
            <ContentWithIconButton
              iconName={faArrowRight}
              content={'Get in touch'}
            />
          </div>
          <div className='col-md-6 intros text-end'>
            <div className='video-box'>
              <img
                src='/images/arts/intro-section-illustration.png'
                alt='coding picture'
                className='img-fluid'
              />
              <span
                role={'button'}
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                <a className=' position-absolute top-50 start-50 translate-middle'>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      className='fas faIcon'
                    />
                  </span>
                  <span className='border-animation border-animation--border-1'></span>
                  <span className='border-animation border-animation--border-2'></span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,197.3C672,149,768,75,864,80C960,85,1056,171,1152,192C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      {
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Video title
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <span>Video will be played here</span>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default Intro
