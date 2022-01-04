function HeadingLine({ servicesHeading, latestWorkHeading, getStarted }) {
  return (
    <div
      className={`${
        servicesHeading || latestWorkHeading || getStarted
          ? 'heading-line mb-1'
          : 'heading-line mb-5'
      }`}
    ></div>
  )
}

export default HeadingLine
