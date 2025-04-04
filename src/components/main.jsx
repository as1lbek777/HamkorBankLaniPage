import React from "react";
import "./main.css"

const MainCards = [
    { name: "Barchasi", count: 9 },
    { name: "Xaridlar uchun", count: 4 },
    { name: "Online xaridlar uchun", count: 1 },
    { name: "Sayohatlar uchun", count: 2 },
    { name: "Premium", count: 2 },
];

const MainCard = () => {
    return (
        <>
            <section className="container">
                <p className="jis">Jismoniy shaxslar uchun / <span>Debet kartalar</span></p>
                <h1>Debet kartalari</h1>
                <div className="containe">
                    {MainCards.map((category, index) => (
                        <div key={index} className="card2">
                            <h2>{category.name}</h2>
                            <span className="span">{category.count}</span>
                        </div>
                    ))}
                </div>
                <div className="section3 sectionflex">
                    <div className="div2">
                        <h3 className="he3">
                            Tovarlar va xizmatlar uchun to'lov
                        </h3>
                        <p className="pi3">
                            O'zbekiston terminallarida
                        </p>
                    </div>
                    <div className="div2">
                        <h3 className="he3">
                            Kartangizni to'ldiring
                        </h3>
                        <p className="pi3">
                            Karta hisobingizga naqd pul kiriting
                        </p>
                    </div>
                    <div className="div2">
                        <h3 className="he3">
                            Uy-joy va kommunal xizmatlar uchun to'lov
                        </h3>
                        <p className="pi3">
                            Kommunal to'lovlarni kartangiz bilan to'lang
                        </p>
                    </div>
                    <div className="div2">
                        <h3 className="he3">
                            Pul o'tkazish
                        </h3>
                        <p className="pi3">
                            Komissiyasiz kartaga
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainCard