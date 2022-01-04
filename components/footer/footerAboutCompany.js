import Link from 'next/link'

function FooterAboutCompany({ heading }) {
  return (
    <>
      <h5 className='text-capitalize fw-bold'>{heading}</h5>
      <hr
        className='bg-white d-inline-block mb-4'
        style={{ width: '60px', height: '2px' }}
      />
      <ul className='list-inline companies-list'>
        <li>
          <Link href={'#0'}>
            <a>Lorem Ipsum</a>
          </Link>
        </li>
        <li>
          <Link href={'#0'}>
            <a>Lorem Ipsum</a>
          </Link>
        </li>
        <li>
          <Link href={'#0'}>
            <a>Lorem Ipsum</a>
          </Link>
        </li>
        <li>
          <Link href={'#0'}>
            <a>Lorem Ipsum</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default FooterAboutCompany
