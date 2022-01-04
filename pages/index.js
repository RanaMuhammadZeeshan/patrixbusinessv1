import Accordian from '../components/accordian/accordian'
import BackToTopButton from '../components/backtotopbutton/backToTopButton'
import Companies from '../components/companies/companies'
import Footer from '../components/footer/Footer'
import GetStarted from '../components/getstarted/getStarted'
import Intro from '../components/intro/intro'
import Navbar from '../components/navbar/navbar'
import Portfolio from '../components/portfolio/portfolio'
import Services from '../components/services/services'
import Testimonial from '../components/testimonial/testimonial'

export default function HomePage() {
  return (
    <>
      <Navbar title={'Patrix - Business'} />
      <Intro />
      <Companies />
      <Services />
      <Testimonial />
      <Accordian />
      <Portfolio />
      <GetStarted />
      <Footer />
      <BackToTopButton />
    </>
  )
}
