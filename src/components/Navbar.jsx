// import React from 'react'
import logo from "../assets/Logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/atle-clive-churchill-7726481ba/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/AtleCliveChurchill" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/atle.clive/?locale=zh-hans" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>

    </div>
  </nav>
}

export default Navbar

