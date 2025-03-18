import { Link } from "react-router-dom"
import "./KidsPage.css"

const KidsPage = () => {
  return (
    <div className="kids-page">
      <div className="kids-hero">
        <div className="container">
          <h1>
            English Learning Programs for <span>Kids</span>
          </h1>
          <p>
            We offer exceptional educational programs for children aged 4 to 12, designed to meet their needs and
            develop their language skills in a fun and interactive way.
          </p>
        </div>
      </div>

      <section className="kids-features">
        <div className="container">
          <h2 className="section-title">Our Program Features</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Specialized Teachers</h3>
              <p>A team of teachers specialized in teaching children using modern educational methods</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3>Interactive Curriculum</h3>
              <p>Curriculum specially designed for children based on games and interactive activities</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3>Flexible Schedule</h3>
              <p>A flexible study schedule that suits children's times and family circumstances</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Continuous Support</h3>
              <p>Continuous communication with parents to follow up on children's progress and provide advice</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kids-levels">
        <div className="container">
          <h2 className="section-title">Available Levels</h2>

          <div className="levels-grid">
            <div className="level-card">
              <div className="level-header">
                <h3>Beginner Level</h3>
                <span className="level-age">4-6 years</span>
              </div>
              <div className="level-content">
                <ul>
                  <li>Learning letters and numbers</li>
                  <li>Basic vocabulary</li>
                  <li>Colors and shapes</li>
                  <li>Simple songs and stories</li>
                </ul>
              </div>
            </div>

            <div className="level-card">
              <div className="level-header">
                <h3>Elementary Level</h3>
                <span className="level-age">7-9 years</span>
              </div>
              <div className="level-content">
                <ul>
                  <li>Building simple sentences</li>
                  <li>Daily conversations</li>
                  <li>Reading and writing</li>
                  <li>Language games</li>
                </ul>
              </div>
            </div>

            <div className="level-card">
              <div className="level-header">
                <h3>Advanced Level</h3>
                <span className="level-age">10-12 years</span>
              </div>
              <div className="level-content">
                <ul>
                  <li>Fluent conversation</li>
                  <li>Basic grammar</li>
                  <li>Story writing</li>
                  <li>Interactive projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kids-cta">
        <div className="container">
          <h2>Register your child now and get a free trial session</h2>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">
              Register Now
            </a>
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KidsPage

