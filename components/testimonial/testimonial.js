import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TestimonialItem from './testimonialItem'

function Testimonial() {
  return (
    <section id='testimonials' className='testimonials'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,32L26.7,74.7C53.3,117,107,203,160,202.7C213.3,203,267,117,320,96C373.3,75,427,117,480,149.3C533.3,181,587,203,640,208C693.3,213,747,203,800,197.3C853.3,192,907,192,960,160C1013.3,128,1067,64,1120,58.7C1173.3,53,1227,107,1280,144C1333.3,181,1387,203,1413,213.3L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'
        ></path>
      </svg>
      <div className='container'>
        <div className='row text-center text-white'>
          <h1 className='display-3 fw-bold '>Testimonials</h1>
          <hr style={{ width: '100px', height: '3px' }} className='mx-auto' />
          <p className='lead pt-1 '>What our clients are saying</p>
        </div>

        <div className='row align-items-center'>
          <div
            id='carouselExampleCaptions'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <TestimonialItem
                  clientPath={'/images/testimonials/client-1.jpg'}
                  review={
                    'lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam. Voluptates, quisquam. Voluptates quisquam. Placeat, quisquam. Voluptates, quisquam.Voluptates, quisquam.'
                  }
                  clientName={'Patrick Muriungi'}
                  occupation={'CEO & founder'}
                />
              </div>

              <div className='carousel-item '>
                <TestimonialItem
                  clientPath={'/images/testimonials/client-2.jpg'}
                  review={
                    'lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam. Voluptates, quisquam. Voluptates quisquam. Placeat, quisquam. Voluptates, quisquam.Voluptates, quisquam.'
                  }
                  clientName={'Joy Marete'}
                  occupation={'Finance Manager'}
                />
              </div>

              <div className='carousel-item '>
                <TestimonialItem
                  clientPath={'/images/testimonials/client-3.jpg'}
                  review={
                    'lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam. Voluptates, quisquam. Voluptates quisquam. Placeat, quisquam. Voluptates, quisquam.Voluptates, quisquam.'
                  }
                  clientName={'ClaireBelle Zawad'}
                  occupation={'Global Marketing Manager'}
                />
              </div>

              <div className='carousel-item '>
                <TestimonialItem
                  clientPath={'/images/testimonials/client-4.jpg'}
                  review={
                    'lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam. Voluptates, quisquam. Voluptates quisquam. Placeat, quisquam. Voluptates, quisquam.Voluptates, quisquam.'
                  }
                  clientName={'Uhuru Kenyatta'}
                  occupation={'C.E.O & founder'}
                />
              </div>

              <div className='carousel-item '>
                <TestimonialItem
                  clientPath={'/images/testimonials/client-5.jpg'}
                  review={
                    'lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam. Voluptates, quisquam. Voluptates quisquam. Placeat, quisquam. Voluptates, quisquam.Voluptates, quisquam.'
                  }
                  clientName={'Junaidi Kibaki'}
                  occupation={'Team lead'}
                />
              </div>
            </div>
            <div className='text-center'>
              <button
                className='btn btn-outline-light px-4'
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='prev'
              >
                <FontAwesomeIcon
                  icon={faLongArrowAltLeft}
                  className='icon fas'
                />
              </button>
              <button
                className='btn btn-outline-light ms-2 px-4'
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='next'
              >
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className='icon fas'
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,32L26.7,74.7C53.3,117,107,203,160,202.7C213.3,203,267,117,320,96C373.3,75,427,117,480,149.3C533.3,181,587,203,640,208C693.3,213,747,203,800,197.3C853.3,192,907,192,960,160C1013.3,128,1067,64,1120,58.7C1173.3,53,1227,107,1280,144C1333.3,181,1387,203,1413,213.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>
      </svg>
    </section>
  )
}

export default Testimonial
