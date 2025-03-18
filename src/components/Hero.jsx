import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Let's Make
            <br />
            Learning <span>Fun</span> !
          </h1>
          <p>
            Discover a new way to learn English with engaging content, interactive exercises, and personalized feedback.
          </p>
          <a href="#about" className="btn btn-primary">
            Let's Discover
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact us
          </a>
        </div>
        <div className="hero-image">
          <img src={"./assets/Hero-image.png" || "/placeholder.svg"} alt="Student learning" />
        
        </div>
      </div>
    </section>
  )
}

export default Hero

