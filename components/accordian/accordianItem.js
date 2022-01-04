function AccordianItem({
  headingClass,
  collapseClass,
  accordianContentHeading,
}) {
  return (
    <>
      <div className='accordion-item shadow mb-3'>
        <h2 className='accordion-header' id={headingClass}>
          <button
            className='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${collapseClass}`}
            aria-expanded='true'
            aria-controls={collapseClass}
          >
            {accordianContentHeading}
          </button>
        </h2>
        <div
          id={collapseClass}
          className='accordion-collapse collapse show'
          aria-labelledby={headingClass}
          data-bs-parent='#accordionExample'
        >
          <div className='accordion-body'>
            <strong>I don&apos;t know. </strong>
            You have to find out yourself
          </div>
        </div>
      </div>
    </>
  )
}

export default AccordianItem
