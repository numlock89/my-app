// dependency imports here
import React from "react"
import ReactDOM from "react-dom"

// css imports here
import "./css/index.css"

// assets import here
import cardpfp from "./images/card-pfp.png"

// function page
function Page() {
    return (
        <div className="page-container">
            <div className="top-info img-n-name">
                <img className="card-pfp" src={cardpfp} />
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
            </div>
            <div className="call-to-action-btn">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
            <div className="p-about-interests">
                <h3>About</h3>
                <p>I am a frontend developer with particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Enterpreneur. Travel geek. Pop culture ninja. Coffe fanatic.</p>
            </div>
        </div>
    )
}

// ReactDOM render
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)