import React from "react";

export default function Hero() {
    return(
        <div className="hero-container container-fluid">
            <div className="hero-panel">
                <h1 className="hero-heading">Run A Clinic</h1>
                <p className="hero-text">A simple, easy to use software for managing your clinic</p>
                <a href="/signup" className="hero-button"><span className="badge rounded-pill bg-mysec hero-button">Register your clinic</span></a>
                <a href="/login" className="hero-button"><span className="badge rounded-pill bg-mysec hero-button">Login to our clinic</span></a>
            </div>
        </div>
    )
}