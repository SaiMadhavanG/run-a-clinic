import React from "react";

export default function NavBar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-myprim">
                <div className="container-fluid">
                    <a class="navbar-brand col-9" href="#">Run A Clinic</a>
                    <a href="/login" className=""><span className="badge rounded-pill bg-mysec nav-button">Login</span></a>
                    <a href="/signup" className=""><span className="badge rounded-pill bg-mysec nav-button">Sign up</span></a>
                </div>
            </nav>
        </div>
    )
}