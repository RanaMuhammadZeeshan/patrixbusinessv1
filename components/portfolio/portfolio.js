import HeadingLine from '../helpers/headingLine'
import PortfolioBox from './portfolioBox'

function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <div className='row text-center mt-5'>
          <h1 className='display-3 fw-bold text-capitalize'>Latest Works</h1>
          <HeadingLine latestWorkHeading={true} />
          <p className='lead'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{' '}
          </p>
        </div>

        <div className='row mt-5 mb-4 g-3 text-center'>
          <div className='col-md-12'>
            <button className='btn btn-outline-primary' type='button'>
              All
            </button>
            <button className='btn btn-outline-primary ms-2' type='button'>
              websites
            </button>
            <button className='btn btn-outline-primary ms-2' type='button'>
              design
            </button>
            <button className='btn btn-outline-primary ms-2' type='button'>
              mockup
            </button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-1.jpg'}
              portfolioName={'portfolio 1'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-2.jpg'}
              portfolioName={'portfolio 2'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-3.jpg'}
              portfolioName={'portfolio 3'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-4.jpg'}
              portfolioName={'portfolio 4'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-5.jpg'}
              portfolioName={'portfolio 5'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-6.jpg'}
              portfolioName={'portfolio  6'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-7.jpg'}
              portfolioName={'portfolio 7'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-8.jpg'}
              portfolioName={'portfolio 8'}
              projectName={'project name'}
              categoryProject={'category project'}
            />
          </div>
          <div className='col-md-6 col-lg-4'>
            <PortfolioBox
              portfolioImgPath={'/images/portfolio/portfolio-9.jpg'}
              portfolioName={'Porfolio 9'}
              projectName={'project name'}
              categoryProject={'category category'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
