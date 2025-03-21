import { Link } from "react-router-dom"
import "./Courses.css"
import { useEffect } from "react";
function scrollToTop() {
  window.scrollTo(0, 0);
}
const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);      
  }, []);
  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="courses-subtitle">
          We provide English courses for all
          age groups and learning needs
        </p>

        <div className="course-cards">
          
        <Link to="/Adults" onClick={scrollToTop} className="course-card">
            <div className="course-image">
            <img src={"./assets/Adults.jpg" || "/placeholder.svg"} alt="Teens learning English" />
            </div>
            <div className="course-info">
              <h3>Adults</h3>
            </div>
          </Link>


          <Link to="/Teens" onClick={scrollToTop} className="course-card blue">
            <div className="course-image">
              <img src={"./assets/Teens.jpg" || "/placeholder.svg"} alt="Teens learning English" />
            </div>
            <div className="course-info">
              <h3>Teens</h3>
            </div>
          </Link>
          <Link to="/Kids" onClick={scrollToTop} className="course-card">
            <div className="course-image">
              <img src={"./assets/Kids.jpg" || "/placeholder.svg"} alt="Kids learning English" />
            </div>
            <div className="course-info">
              <h3>Kids</h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Courses

