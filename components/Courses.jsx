import "./Courses.css"

export default function Courses() {
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
          <div className="course-card">
            <div className="course-image">
              <img src="/placeholder.svg?height=200&width=300" alt="Kids learning English" />
            </div>
            <div className="course-info">
              <h3>Kids</h3>
            </div>
          </div>

          <div className="course-card">
            <div className="course-image">
              <img src="/placeholder.svg?height=200&width=300" alt="Teens learning English" />
            </div>
            <div className="course-info">
              <h3>Teens</h3>
            </div>
          </div>

          <div className="course-card">
            <div className="course-image">
              <img src="/placeholder.svg?height=200&width=300" alt="Adults learning English" />
            </div>
            <div className="course-info">
              <h3>Adults</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

