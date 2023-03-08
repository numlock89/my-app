// dependency imports here
import React from "react"
import ReactDOM from "react-dom"

// js imports here
import Header from "./header.js"
import MainContent from "./maincontent.js"
import Footer from "./footer.js"

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