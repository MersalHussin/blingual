"use client"

import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">
            <img src="/placeholder.svg?height=40&width=40" alt="B-lingual Logo" />
            <span>B-lingual</span>
          </a>
        </div>

        <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#" className="btn btn-primary start-now-btn">
          Start Now
        </a>
      </div>
    </nav>
  )
}

