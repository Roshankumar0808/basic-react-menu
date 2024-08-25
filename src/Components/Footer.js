import React from 'react'
import './Footer.css'
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="wave">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li><a href="mailto:roshananand2014@gmail.com"><AiFillMail/></a></li>
        <li><a href="https://x.com/Roshan_0808"><AiFillTwitterCircle/></a></li>
        <li><a href="https://www.instagram.com/roshan4445/"><AiFillInstagram/></a></li>
        <li><a href="https://www.linkedin.com/in/roshan-kumar-85a303158/"><AiFillLinkedin/></a></li>
      </ul>
      <p>@2024 Roshan Kumar | All Rights Reserved</p>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </footer>
  )
}

export default Footer
