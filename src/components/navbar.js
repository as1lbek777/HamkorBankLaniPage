import React from "react";
import "./navbar.css";

const navItems = ["Kreditlar", "Kartalar", "Mikroqarzlar", "Omonatlar", "Valyutalar kursi", "Yana"];

const Navbar = () => {
    return (
        <>
            <nav className="navbar container">
                <div className="flex2">
                    <a href="#" className="logo">HamkorBank</a>
                    <ul className="nav-links">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="currency">
                    <a href="#" className="flex card">
                        <p className="p1"><span className="shop2">$</span> 12,860 <span className="shop">Sotib olish</span></p>
                        <p className="p1">12,970 <span className="shop3">Sotish</span></p>
                    </a>
                    <button className="internet-bank">Internet-bank</button>
                </div>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
