import HeadingLine from '../helpers/headingLine'
import CtaForm from './ctaForm'
import CtaInfo from './ctaInfo'

function GetStarted() {
  return (
    <section id='contact' className='get-started'>
      <div className='container'>
        <div className='row text-center'>
          <h1 className='display-3 fw-bold text-capitalize'>Get Started</h1>
          <HeadingLine getStarted={true} />
          <p className='lh-lg'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className='row text-white'>
          <div className='col-12 col-lg-6 gradient shadow p-3'>
            <CtaInfo />
          </div>
          <div className='col-12 col-lg-6 bg-white shadow p-3'>
            <CtaForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
