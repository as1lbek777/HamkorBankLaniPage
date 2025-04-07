import React from "react";
import "./main.css"

const MainCards = [
    { name: "Barchasi", count: 38 },
    { name: "2024", count: 3 },
    { name: "2023", count: 4 },
    { name: "2022", count: 4 },
    { name: "2021", count: 3 },
    { name: "2020", count: 4 },
    { name: "2019", count: 4 },
    { name: "2018", count: 4 },
    { name: "2017", count: 5 },
    { name: "2016", count: 6 },
    { name: "2015", count: 1 },
];

const MainCard = () => {
    return (
        <>
            <section className="container">
                <p className="jis">Aksiyadorlar va investorlar uchun / <span>Hisobotlar</span></p>
                <h1>Hisobotlar</h1>
                <div className="containe">
                    {MainCards.map((category, index) => (
                        <div key={index} className="card2">
                            <h2>{category.name}</h2>
                            <span className="span">{category.count}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default MainCard
