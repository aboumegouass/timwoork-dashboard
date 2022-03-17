import React from 'react'

export default function Navbar() {
    return (
        <nav className='fariza-navbar navbar navbar-expand-lg navbar-light bg-white'>
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img src="/logo.png" alt="Fariza Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a id="l1" className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a id="l2" className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a id="l3" className="nav-link" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a id="l4" className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a id="l5" className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
