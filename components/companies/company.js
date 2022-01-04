function Company({ imgPath, companyName }) {
  return (
    <div className='companies__logo-box shadow-sm'>
      <img
        src={imgPath}
        alt='company logo'
        title={companyName}
        className='img-fluid'
      />
    </div>
  )
}

export default Company
