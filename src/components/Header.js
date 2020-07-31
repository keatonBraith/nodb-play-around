import React from "react";
import logo from "../memory-logo.png"

const Header = () => {
    return (
        <header className="head-body">
            <img src={logo} className="logo" alt="Memories Logo"/>
            <h1 className="head-title">Thanks For The Memories!</h1>
        </header>
    )
}

export default Header;