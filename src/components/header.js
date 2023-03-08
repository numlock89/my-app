import React from "react"

// assets import here
import ReactLogo from "../images/react-logo.png"

// css imports here
import "../css/header.css"

export default function Header() {
    return (
        <div>
            <nav className="nav">
                <div className="nav-left">
                    <img className="react-logo" src={ReactLogo} />
                    <h1>React JS</h1>
                </div>
                <ul className="nav-ul">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}