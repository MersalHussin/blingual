import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import KidsPage from "./pages/KidsPage/KidsPage"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<KidsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

