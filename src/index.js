// dependency imports here
import React from "react"
import ReactDOM from "react-dom"

// js imports here
import Header from "./components/header.js"
import MainContent from "./components/maincontent.js"
import Footer from "./components/footer.js"

// css imports here
import "./css/index.css"

// function page
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

// ReactDOM render
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)