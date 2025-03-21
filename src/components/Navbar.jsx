import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScrollAndHash = () => {
      const hash = window.location.hash.replace("#", "") || "home" // الحصول على الـ hash الحالي
      const sections = ["home", "about", "courses", "features", "reviews"]
      const courseSubPages = ["courses-kids", "courses-adults", "courses-teens"]
      const scrollPosition = window.scrollY + 100

      // إذا كان الـ hash يشير إلى إحدى الصفحات الفرعية للكورسات
      if (courseSubPages.includes(hash)) {
        setActiveSection("courses")
      } else {
        // تتبع السكرول للسيكشن الرئيسية
        sections.forEach((section) => {
          const element = document.getElementById(section)
          if (element) {
            const top = element.offsetTop
            const height = element.offsetHeight
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section)
            }
          }
        })
      }
    }

    window.addEventListener("scroll", handleScrollAndHash)
    window.addEventListener("hashchange", handleScrollAndHash)
    handleScrollAndHash() // تشغيل عند التحميل الأولي

    return () => {
      window.removeEventListener("scroll", handleScrollAndHash)
      window.removeEventListener("hashchange", handleScrollAndHash)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">
            <img src="./assets/Logo.png" alt="B-lingual Logo" />
          </a>
        </div>

        <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/#home" className={activeSection === "home" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className={activeSection === "about" ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="/#courses" className={activeSection === "courses" ? "active" : ""}>
              Courses
            </a>
      
          </li>
          <li>
            <a href="/#features" className={activeSection === "features" ? "active" : ""}>
              Features
            </a>
          </li>
          <li>
            <a href="/#reviews" className={activeSection === "reviews" ? "active" : ""}>
              Reviews
            </a>
          </li>
        <a href="tel:+201017305918" className="btn mobile btn-primary start-now-btn">
          Contact Us <i className="fa-solid fa-phone-volume"></i>
        </a>
        </ul>

        <a href="tel:+201017305918" className="btn desktop btn-primary start-now-btn">
          Contact Us <i className="fa-solid fa-phone-volume"></i>
        </a>
      </div>
    </nav>
  )
}

export default Navbar