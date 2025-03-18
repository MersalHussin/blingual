import "./AboutUs.css"

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        <div className="about-content">
          <div className="about-image">
            <img src={"./assets/About-image.jpg" || "/placeholder.svg"} alt="Students in classroom" />
          </div>

          <div className="about-text">
            <p>
              We empower individuals to master different languages through innovative teaching methods and personalized
              learning paths. Our goal is to enhance their career prospects and open doors to a brighter future.
            </p>
            <a href="#contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

