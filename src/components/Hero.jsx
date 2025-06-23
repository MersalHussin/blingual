import "./Hero.css"
const Hero = () => {
  return (
    <section id="home" className="hero">
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
          <div className="btns">

          <a href="#about" className="btn btn-primary">
            Let's Discover
          </a>
          <a href="https://wa.me/message/53YMYDUG5NFVJ1" target="_blank" className="btn btn-secondary">
            Contact us
          </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={"./assets/Hero-image.webp" || "/placeholder.svg"} alt="Student learning" />
        
        </div>
      </div>
    </section>
  )
}

export default Hero

