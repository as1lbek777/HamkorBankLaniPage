import React from "react";
import "./navbar.css";

const navItems = ["Muhim faktlar", "Hisobotlar", "Emissiya", "Dividendlar", "Ko'proq"];

const Navbar = () => {
    return (
        <>
            <div className="navbar" />
            <nav className="nav container">
                <div className="flex2">
                    <a href="#" className="logo">
                        <img src="https://hamkorbank.uz/assets/images/static/logo.svg" alt="HamKorBank" />
                    </a>
                    <ul className="nav-links">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="currency">
                    <a href="#" className="flex card">
                        <p className="p1"><span className="shop2">$</span> 12,870 <span className="shop">Sotib olish</span></p>
                        <p className="p1">12,970 <span className="shop3">Sotish</span></p>
                    </a>
                    <button className="internet-bank">Internet-banking</button>
                </div>
                <div className="media">
                    <span>&#128083;</span>
                    <span title="Language">&#127760;</span>
                    <span title="Menu">&#9776;</span>
                </div>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;