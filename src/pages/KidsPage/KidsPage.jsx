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
        image: "/assets/General-English-Kids.webp",
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
        image: "/assets/Conversation-English-Kids.webp",
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
        image: "/assets/Kids.webp",
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
        title: "General English",
        image: "./assets/General-English.webp",
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
        image: "./assets/Business-English.webp",
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
        image: "./assets/Conversation-English.webp",
        imageAlt: "Teen debate",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
          {
        id: 7,
        title: "The 90-day plan to be fluent in English",
        CourseNote: "For intermediate levels",
        image: "./assets/The 90.webp",
        imageAlt: "Teen debate",
        colorClass: "blue",
        sessions_course: "24 + 12 on Friday",
        due_course: "3 Months",
        sessionTime: 120,
        more_info : '2 Calls a week "48 calls during the course" & Daily Tasks for extra practice ',
        options: ["Private", "Group"],
      },
    ],
    Adults: [
    
      {
        id: 8,
        title: "General English",
        image: "./assets/General-English.webp",
        imageAlt: "Teens learning",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 9,
        title: "Business English",
        image: "./assets/Business-English.webp",
        imageAlt: "Teen debate",
        colorClass: "blue",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 180,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 10,
        title: "English Conversation",
        image: "./assets/Conversation-English.webp",
        imageAlt: "Teen debate",
        colorClass: "orange",
        sessions: 8,
        sessionsPerWeek: 2,
        sessionTime: 60,
        content: "Speaking - Listening - Reading - Writing - Grammar",
        options: ["Private", "Group"],
      },
      {
        id: 11,
        title: "The 90-day plan to be fluent in English",
        CourseNote: "For intermediate levels",
        image: "./assets/The 90.webp",
        imageAlt: "Teen debate",
        colorClass: "blue",
        sessions_course: "24 + 12 on Friday",
        due_course: "3 Months",
        sessionTime: 120,
        more_info : '2 Calls a week "48 calls during the course" & Daily Tasks for extra practice ',
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
              <h3>{course.CourseNote && <p style={{ textAlign: "center", backgroundColor:"white" , padding:"10px",  color:"#e86126"}}>{course.CourseNote}</p> }</h3>
              <div className="course-details">
          {course.due_course && <p>Duration: {course.due_course}</p>}
          {course.sessions_course && <p>Sessions: {course.sessions_course}</p>}
          {course.sessions && <p>Level Sessions: {course.sessions} sessions</p>}
          {course.sessionsPerWeek && <p>Session per week: {course.sessionsPerWeek} session</p>}
          {course.sessionTime && <p>Session time: {course.sessionTime} minutes</p>}
          {course.content && <p>Course content: {course.content}</p>}
          {course.more_info && <p>More information: {course.more_info}</p>}
          {course.options?.length > 0 && (<h4 className="course-options">{course.options.join(" | ")}</h4>
          )}

                <a href="https://wa.me/message/53YMYDUG5NFVJ1" target="_blank" className="book-now">
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
