import "./CallToAction.css"

const CallToAction = () => {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <h2>
          Are You Ready
          <br />
          to Start Your Journy
        </h2>
        <a href="https://api.whatsapp.com/message/FOSTJGBTNFQYH1?autoload=1&app_absent=0" target="_blank" className="btn btn-outline">
          Contact us           <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </section>
  )
}

export default CallToAction

