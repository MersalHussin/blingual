import { useState } from "react"
import "./Reviews.css"
// import avatarImage from "./assets/About-image.webp"

const reviewsData = [
  {
    id: 1,
    name: "Nour",
    text: "حقيقي الكورس كويس جددا وبستفيد منه كتير .. بجد شكرا جددا ع تعبك معايه ودايما بتحاولي توصليلي المعلومه بكل سهولة ..♥️",
    avatar:"./assets/Female.webp"
  },
  {
    id: 2,
    name: "Yasmeen",
    avatar:"./assets/Female.webp",
    text:"و الله ما عارفه اشكر حضرتك ازاي شكرا جدا والله لحضرتك واستفادت جامد والله ربنا يكرمك والله والسيشن كانت لذيذه ومحستش بالوقت خالص خالص وكسرتي حاجز الخوف والله بجد.شكرا جدا"
  },
  {
    id: 3,
    name: "Ezz El-deen",
    avatar:"./assets/Male.webp",
    text: "تيم هايل بجد وممتازين ف أنهم بيعرفو مشكله كل واحد وبيشتغلو عليها بطريقه تناسبه فا دي حاجه آخر جمدان الصراحه بلاس انهم مش بيخصصو ماتريال معينه لكل الناس",
  },

  {
    id: 4,
    name: "Madam Rabab",
    avatar:"./assets/Female.webp",
    text:"معاكي اللي شيفاه صح اعمليه السيشن كانت جميله اوي واتبسطنا اوي وهوا مش حاسس انه بياخد كورس اصلا بقول عايكي صحبتي 😂🙈 وعايز يبعتلك اللعب بتعتو, والتيم جميل والكورس هايل موعيد مظبوطه التزام بروفيشل وفرندلي جدا بتشوفو الطفل ناقصه ايه وبيتم التركيز عليها بالتوفيق يا رب ومن نجاح لنجاح دايما"
    
  },
  {
    id: 5,
    name: "Manar",
    avatar:"./assets/Female.webp",
    text:"I want to thank you for everything you've done for me 🙏I'm so grateful for everything.  For your kindness and support that made me more confident than before. By yours way of teaching, and I want you to know that your efforts have been appreciated. I'm so grateful for knowing you and having that course. Thanks a lot Sohaila ♥"
  },
  {
    id: 6,
    name: "Eman",
    avatar:"./assets/Female.webp",
    text:"بجد متشكرة جدا جدا جدا لحضرتك وأفضل حاجه حلوة انا عديت بيها والله هي حضرتك ان شاء الله هشتغل علي نفسي في النقط ديه وتلاقيني كويسه فيها في الليفيل اللي جاي ان شاء الله, الله يبارك فيكي ياارب شكرا جدا جدا جدااا ❤️❤️"
  },
  {
    id: 7,
    name: "Mohamed Taleb",
    avatar:"./assets/Male.webp",
    text:"في نهاية الشهر الثاني بصراحة مش عارف اشكرك ازاي ولا اقولك الى اي مستوى انا مرتاح جداً في السيشنات معك، من اسلوبك الجميل واللطيف وطريقتك الجميلة في الشرح ورحابة صدرك في الاعادة والمحاولة للوصول للمستوى المطلوب والمعلومات الكافية للتطوير . انتي استاذة شاطرة وبصراحة تدريسك يخلي الواحد يحب اللغة حتى لو مهمل او مش بيحبها, شكراً بكل ماتعنيه الكلمة، "
  },
  {
    id: 9,
    name: "Sayed",
    avatar:"./assets/Male.webp",
    text:"حضرتك فعلا ادتيني مفتان الإنجليزي بطريقة سهلة وسلسة جدا, ممتن ليكي ومش هتعرفي كمية الفضل والجزاء الاخروي اللي هتاخديه علي انك وصلتيني علي طريق تعلم الإنجليزية, لانك هتوصليني لغرض مهم جدا بسبب تعلم اللغة هيكون في ميزان حسناتك الي يوم القيامة وشكرا جدا ليكي علي حسن ادبك وطيبتك وذكائك وصبرك واجتهادك انتي استاذة شاطرة وبصراحة تدريسك يخلي الواحد يحب اللغة حتى لو مهمل او مش بيحبها, شكراً بكل ماتعنيه الكلمة، ويارب الحياة تكون كريمة معك زي ما انتي كريمة في تدريسك ومعلوماتك واسلوبك الجميل..❤🙏 شكراً لك جداً مس سهيلة 🌹"
  },
  {
    id: 8,
    name: "Madam Heba",
    avatar:"./assets/Female.webp",
    text:"والله حضرتك عارفة رأيي مسبقا ❤️❤️ محمد فعلا مستواه بيتحسن جدا لما بيكون جدا لما بيكون مع حضرتك كفابة انه له فترة بيكلمنا انجليش بس في البيت 😃😃قبل ما نرجع تاني كنت بحسه خايف يتكلم انجليش ده غير نطق الكلمات من اول ليفيل وفيه تحسن وان شاء الله يتحسن اكتر الشهور الجايه, وبالنسبه لنيللي الكورس جميل جدا وعجبنى النظام واخدنا وقت حلو للمراجعه والنتيجه كانت حلوه اوى الحمد لله موفقين دايما يارب"
  },
  {
    id: 10,
    name: "Ereny",
    avatar:"./assets/Female.webp",
    text:"بعد شهرين بجد باين فيهم الفرق معايا جدا و ده بسبب مجهودك و مجهود التيم ... انا كنت حاسة الموضوع صعب جدا بس طلع العكس بسبب شاطرتك وامانتك في المادة لي بتتقدم و في اختيار daily tasks كمان و كل حاجة بنعملها اد ايه هي بتخليني احسن و بتطور علشان بتقدري تشتغلي علي النقط الضعف لي عندي و فكرة ان حد متابعني وبقي مخلي الانجليزي جزء من روتيني في اليوم و ده بسبب المتابعه و daily tasks .. اخر حاجة من كتر ما بتكلم انجلش اذا كان في سيشن او homework بقيت مش بتكسف و بستخدم الكلمات في يومي و الموضوع سهل .. فعلا شكرا ♥"
  },
  {
    id: 11,
    name: "Islam Mostafa",
    avatar:"./assets/Male.webp",
    text: "Hey Sohaila, I wanted to take a moment to express my gratitude for your outstanding teaching and the positive impact you've had on my learning experience. Your communication skills are truly exceptional, making complex concepts clear and accessible. Your flexibility in adapting lessons to our needs, as well as the variety of topics you cover—from general to business English—have been invaluable. Moreover, your patience and spirit in guiding us through challenges have made learning enjoyable and rewarding. I've already recommended you to my network, confident that they too will benefit from your expertise and dedication. Thank you once again for everything you do."
  },
  {
    id: 12,
    name: "Aliaa",
    avatar:"./assets/Female.webp",
    text:"بجد السيشن كانت حلوة اوي اوي والله انا أصلا بتكسف أتكلم قدام حد وكده بالعربي وبالانجليش بتلغبط جامد بس ماشاء الله حضرتك خليتي السيشن ممتعه كده ف نسيت الخجل واتكلمت عادي ولاقيت الكلام بيطلع لوحده ❤️ بجد شكرا اوي دخلت سيشنز كتير اوي والله ومرتاحتش قد كده والله السشن كان حلو اوي وممتع اوي اوي❤️ شكرا جدا والله, وما شاء الله حضرتك بجد شاطره اوي وبلص ان عند حضرتك روح حلوة اوي والله تنسي التوتر أصلا ومهارات تواصل عاليه خالص❤️ تسلمي جدا والله"
  },
]

const Reviews = () => {
  const [expandedIds, setExpandedIds] = useState([])

  const toggleReadMore = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Reviews</h2>

        <div className="review-cards">
          {reviewsData.map((review) => {
            const isExpanded = expandedIds.includes(review.id)
            return (
              <div className="review-card" key={review.id}>
                <div className="review-header">
                  <span className="review-label">Feedback</span>
                </div>
                <div className="review-content">
                  <div className="review-avatar">
                    <img src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  </div>

                  <p className="review-text" dir="auto">
                    {isExpanded ? review.text : truncateText(review.text, 80)}
                  </p>

                  {review.text.length > 80 && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleReadMore(review.id)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <p className="review-name">{review.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Reviews

