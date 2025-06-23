import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={"./assets/Logo.webp" || "/placeholder.svg"} alt="B-lingual Logo" />
          
        </div>

        <div className="social-links">
          <a href="https://wa.me/message/53YMYDUG5NFVJ1" className="social-link">
          <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/SohilaEnglish/" className="social-link">
          <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sohailaenglish?igsh=MW9vaWVvaHJ2b3lodg%3D%3D" className="social-link">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@belingual?lang=en" className="social-link">
          <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@sohailaEnglish" className="social-link">
          <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="footer-line"></div>
        <p className="rights">&copy; {new Date().getFullYear()} B-lingual. All rights reserved.</p>
        <a className="Developer" target="_blank" href="https://mersal.top">Designed & Developed in Fire by Mersal</a>
      </div>
    </footer>
  )
}

export default Footer

