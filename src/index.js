import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import Navbar from "./components/navbar";
import BankCardLis from "./components/main";
import BankCardList from "./components/section";

const Hamkorbank = () => {
    return (
        <>
            <Navbar />
            <BankCardLis />
            <BankCardList />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hamkorbank />);
export default Hamkorbank;