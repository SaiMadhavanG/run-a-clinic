import React from "react";

export default function NavBar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-myprim">
                <div className="container-fluid">
                    <a class="navbar-brand col-1" href="#">Run A Clinic</a>
                    <div className="col-8"></div>
                    <a href="/login" className=""><span className="badge rounded-pill bg-mysec nav-button">Login</span></a>
                    <a href="/signup" className=""><span className="badge rounded-pill bg-mysec nav-button">Sign up</span></a>
                </div>
            </nav>
        </div>
    )
}