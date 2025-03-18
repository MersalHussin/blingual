import { Link } from "react-router-dom"
import "./Courses.css"
// import kidsImage from "../assets/kids-course.png"
// import teensImage from "../assets/teens-course.png"
// import adultsImage from "../assets/adults-course.png"

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="courses-subtitle">
          We provide English courses for all
          <br />
          age groups and learning needs
        </p>

        <div className="course-cards">
          <Link to="/kids" className="course-card">
            <div className="course-image">
              <img src={"./assets/About-image.jpg" || "/placeholder.svg"} alt="Kids learning English" />
            </div>
            <div className="course-info">
              <h3>Kids</h3>
            </div>
          </Link>

          <Link to="/teens"  className="course-card">
            <div className="course-image">
              <img src={"./assets/Hero-image.png" || "/placeholder.svg"} alt="Teens learning English" />
            </div>
            <div className="course-info">
              <h3>Teens</h3>
            </div>
          </Link>

          <Link to="/Adults"  className="course-card">
            <div className="course-image">
              <img src={"./assets/Hero-image.png"  || "/placeholder.svg"} alt="Adults learning English" />
            </div>
            <div className="course-info">
              <h3>Adults</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Courses

