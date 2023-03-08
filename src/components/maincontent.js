import React from "react"

// css import here
import "../css/maincontent.css"

// actual content
export default function MainContent() {
    return (
        <div className="main-content-container">
            <div className="main-content">
            <h1>Reasons I'm excited to learn React:</h1>
            <ul className="main-content-ul">
                <li>It's a popular library and high in demand.</li>
                <li>I'll be in cool kids group, if that's a thing.</li>
                <li>Very important to learn to get job.</li>
            </ul>
        </div>
        </div>
    )
}