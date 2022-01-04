import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CtaForm() {
  return (
    <div className='form w-100  pb-2'>
      <h4 className='display-3--title mb-5 '>start your project</h4>
      <form action='#' className='row'>
        <div className='mb-3 col-md-6 col-lg-6'>
          <input
            type={'text'}
            placeholder='First Name'
            id='inputFirstName'
            className='form-control shadow form-control-lg'
          />
        </div>
        <div className='mb-3 col-md-6 col-lg-6'>
          <input
            type={'text'}
            placeholder='Last Name'
            id='inputLastName'
            className='form-control shadow form-control-lg'
          />
        </div>
        <div className='mb-3 col-lg-12'>
          <input
            type={'email'}
            placeholder='Email Address'
            id='inputEmail'
            className='form-control shadow form-control-lg'
          />
        </div>
        <div className='mb-3 col-lg-12'>
          <textarea
            name='message'
            placeholder='Message'
            id='message'
            rows={8}
            className='form-control shadow form-control-lg'
          />
        </div>
        <div className='text-center d-grid mt-1'>
          <button
            type='button'
            className='btn btn-primary rounded-pill pt-3 pb-3'
          >
            submit
            <FontAwesomeIcon icon={faPaperPlane} className='fas ms-1' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default CtaForm
