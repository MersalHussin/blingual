import "./Hero.css"

export default function Hero() {
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
          <a href="#contact" className="btn btn-primary">
            Contact us
          </a>
        </div>
        <div className="hero-image">
          <img src="/placeholder.svg?height=500&width=400" alt="Student learning" />
          <div className="decoration-dots"></div>
          <div className="decoration-square"></div>
        </div>
      </div>
    </section>
  )
}

