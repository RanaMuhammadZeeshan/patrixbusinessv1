import AccordianItem from './accordianItem'

function Accordian() {
  return (
    <section id='faq' className='faq'>
      <div className='container'>
        <div className='row  text-center'>
          <h1 className='display-3 fw-bold text-uppercase'>faq</h1>
          <div className='heading-line'></div>
          <p className='lead'>
            Frequently asked questions, get knowledge before hand
          </p>
        </div>

        <div className='row mt-5'>
          <div className='col-md-12'>
            <div className='accordion' id='accordionExample'>
              <AccordianItem
                accordianContentHeading={'What are the main features?'}
                headingClass={'headingOne'}
                collapseClass={'collapseOne'}
              />
              <AccordianItem
                accordianContentHeading={'Do i have to pay again after trial?'}
                headingClass={'headingTwo'}
                collapseClass={'collapseTwo'}
              />
              <AccordianItem
                accordianContentHeading={'How can i get started after trial?'}
                headingClass={'headingThree'}
                collapseClass={'collapseThree'}
              />
              <AccordianItem
                accordianContentHeading={'Can i cancel my subscription?'}
                headingClass={'headingFour'}
                collapseClass={'collapseFour'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accordian
