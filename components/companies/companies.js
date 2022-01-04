import HeadingLine from '../helpers/headingLine'
import Company from './company'

function Companies() {
  return (
    <section className='companies' id='companies'>
      <div className='container'>
        <div className='row text-center'>
          <h4 className='fw-bold lead mb-3'>trusted by companies like</h4>

          <HeadingLine />
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-lg-2'>
            <Company
              imgPath={'/images/campanies/campany-1.png'}
              companyName={'Microsoft'}
            />
          </div>
          <div className='col-md-4 col-lg-2'>
            <Company
              imgPath={'/images/campanies/campany-2.png'}
              companyName={'Google'}
            />
          </div>
          <div className='col-md-4 col-lg-2'>
            <Company
              imgPath={'/images/campanies/campany-3.png'}
              companyName={'Walmart'}
            />
          </div>
          <div className='col-md-4 col-lg-2'>
            <Company
              imgPath={'/images/campanies/campany-4.png'}
              companyName={'Airbnb'}
            />
          </div>
          <div className='col-md-4 col-lg-2'>
            <Company
              imgPath={'/images/campanies/campany-5.png'}
              companyName={'Amazon'}
            />
          </div>
          <div className='col-md-4 col-lg-2'>
            <Company
              imgPath={'/images/campanies/campany-6.png'}
              companyName={'CNN'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
