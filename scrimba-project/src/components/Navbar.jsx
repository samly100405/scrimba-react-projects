import React from "react";
import reactIcon from "../images/react-icon-small.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactIcon} width="29px" height="29px"/>
      <h3>ReactFacts</h3>    
      <h4>React Course - Project 1</h4>
    </nav>
  )
}