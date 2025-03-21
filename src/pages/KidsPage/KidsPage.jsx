import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import "./KidsPage.css";
import Courses from "../../components/Courses";
import CallToAction from "../../components/CallToAction";

export default function CoursesPage() {
  const { category } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const validCategories = ["Kids", "Teens", "Adults"];
  const activeTab = validCategories.includes(category) ? category : "Kids";

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const coursesData = {
    Kids: [
      {
        id: 1,
        title: "General English",
        image: "/assets/General-English-Kids.jpg",
        imageAlt: "Children studying together",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 2,
        title: "Conversation",
        image: "/assets/Conversation-English-Kids.jpg",
        imageAlt: "Children in conversation",
        colorClass: "blue",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 3,
        title: "Foundation Course",
        image: "/assets/kids.jpg",
        imageAlt: "Child studying",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
    ],
    Teens: [
      {
        id: 4,
        title: "Genral English",
        image: "./assets/General-English.jpg",
        imageAlt: "Teens learning",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 5,
        title: "Business English",
        image: "./assets/Business-English.jpg",
        imageAlt: "Teen debate",
        colorClass: "blue",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 180,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 6,
        title: "English Conversation",
        image: "./assets/Conversation-English.jpg",
        imageAlt: "Teen debate",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
    ],
    Adults: [
    
      {
        id: 7,
        title: "Genral English",
        image: "./assets/General-English.jpg",
        imageAlt: "Teens learning",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 8,
        title: "Business English",
        image: "./assets/Business-English.jpg",
        imageAlt: "Teen debate",
        colorClass: "blue",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 180,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 9,
        title: "English Conversation",
        image: "./assets/Conversation-English.jpg",
        imageAlt: "Teen debate",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },

    ],
  };

  return (
    <>
    <div className={`courses-container ${isLoaded ? "fade-in" : ""}`}>
      <header className="header">
        <div className="header-content">
          <h1 className="animate-title">{activeTab} Courses</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="arrow">▶</span>
            <Link to="/#courses">Courses</Link>
            <span className="arrow">▶</span>
            <span className="active">{activeTab}</span>
          </div>
        </div>
      </header>

      <main>
      <h2 className="section-title">{activeTab} Courses</h2>
        <h3 className="courses-txt">We offer a variety of courses tailored to suit different learning needs and levels</h3>
        <div className="courses-grid">
          {coursesData[activeTab].map((course) => (
            <div key={course.id} className={`course-box ${course.colorClass}`}>
              <div className="course-data-image">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.imageAlt}
                  className="zoom-image"
                />
              </div>
              <h2>{course.title}</h2>
              <div className="course-details">
                <p>Level Sessions: {course.sessions} sessions</p>
                <p>Session per week: {course.sessionsPerWeek} session</p>
                <p>Session time: {course.sessionTime} minutes</p>
                <p>Course content: {course.content}</p>
                <h4 className="course-options">{course.options.join(" | ")}</h4>
                <a href="https://api.whatsapp.com/message/FOSTJGBTNFQYH1?autoload=1&app_absent=0" target="_blank" className="book-now">
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    {/* <CallToAction /> */}
    <Courses />
    </>
  );
}
