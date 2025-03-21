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
            <a href="https://api.whatsapp.com/message/FOSTJGBTNFQYH1?autoload=1&app_absent=0" target="_blank" className="btn btn-outline">
              Contact Us  <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

