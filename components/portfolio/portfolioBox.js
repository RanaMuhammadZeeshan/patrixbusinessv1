function PortfolioBox({
  portfolioImgPath,
  portfolioName,
  projectName,
  categoryProject,
}) {
  return (
    <>
      <div className='portfolio-box shadow'>
        <img
          src={portfolioImgPath}
          alt={`${portfolioName} image`}
          title={portfolioName}
          className='img-fluid'
        />
        <div className='portfolio-info'>
          <div className='caption'>
            <h4>{projectName}</h4>
            <p>{categoryProject}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioBox
