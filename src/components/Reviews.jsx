import "./Reviews.css"
// import avatarImage from "./assets/About-image.jpg"

const reviewsData = [
  {
    id: 1,
    name: "محمد علي",
    text: "تجربة رائعة مع بي-لينجوال، تعلمت الكثير في وقت قصير وبطريقة ممتعة. المعلمون محترفون ويهتمون بتقدم الطلاب.",
  
  },
  {
    id: 2,
    name: "سارة أحمد",
    text: "أنا سعيدة جدًا بالتقدم الذي أحرزته في اللغة الإنجليزية مع بي-لينجوال. الدروس متنوعة والمنهج شامل.",
  
  },
  {
    id: 3,
    name: "أحمد محمود",
    text: "تعلمت الكثير من المهارات اللغوية التي ساعدتني في عملي. أنصح بشدة بالدراسة في بي-لينجوال لكل من يريد تطوير لغته.",
  
  },
  {
    id: 4,
    name: "فاطمة خالد",
    text: "المعلمون رائعون والمنهج متكامل. استفدت كثيرًا من الدورات وأصبحت أكثر ثقة في التحدث باللغة الإنجليزية.",
  
  },
  {
    id: 5,
    name: "عمر حسن",
    text: "تجربة تعليمية ممتازة، الدروس منظمة والشرح واضح. أشكر فريق بي-لينجوال على الجهود المبذولة.",
  
  },
  {
    id: 6,
    name: "نورا سامي",
    text: "أفضل مكان لتعلم اللغة الإنجليزية. المعلمون متعاونون والمواد التعليمية حديثة وممتعة.",
  
  },
  {
    id: 7,
    name: "خالد إبراهيم",
    text: "تحسنت مهاراتي في اللغة الإنجليزية بشكل كبير بعد الالتحاق ببي-لينجوال. أنصح به بشدة لجميع المستويات.",
  
  },
  {
    id: 8,
    name: "ليلى عادل",
    text: "تجربة مميزة وفريدة من نوعها. المعلمون محترفون والمنهج شامل ويغطي جميع جوانب اللغة.",
  
  },
  {
    id: 9,
    name: "يوسف رامي",
    text: "أشكر بي-لينجوال على المستوى المتميز في تعليم اللغة الإنجليزية. استفدت كثيرًا من الدورات المقدمة.",
  
  },
  {
    id: 10,
    name: "هدى سمير",
    text: "تجربة رائعة مع معلمين متميزين. أنصح بشدة بالالتحاق ببي-لينجوال لكل من يريد تعلم اللغة الإنجليزية.",
  
  },
  {
    id: 11,
    name: "كريم فادي",
    text: "المنهج متكامل والشرح ممتاز. استفدت كثيرًا من الدورات وتحسنت مهاراتي في اللغة الإنجليزية بشكل ملحوظ.",
  
  },
  {
    id: 12,
    name: "رنا حسام",
    text: "تجربة تعليمية مميزة مع بي-لينجوال. المعلمون محترفون والمواد التعليمية متنوعة وشاملة.",
  
  },
]

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Reviews</h2>

        <div className="review-cards">
          {reviewsData.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <span className="review-label">Feedback</span>
              </div>
              <div className="review-content">
                <div className="review-avatar">
                  <img src={review.avatar || "/placeholder.svg"} alt={review.name} />
                </div>
                <p className="review-text">{review.text}</p>
                <p className="review-name">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

