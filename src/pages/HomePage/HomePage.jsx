import Hero from "../../components/Hero"
import AboutUs from "../../components/AboutUs"
import Courses from "../../components/Courses"
import CallToAction from "../../components/CallToAction"
import Reviews from "../../components/Reviews"
import "./HomePage.css"
import ProgramFeatures from "../../components/ProgramFeatures"

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutUs />
      <Courses />
      <ProgramFeatures/>
      <CallToAction />
      <Reviews />
    </div>
  )
}

export default HomePage

