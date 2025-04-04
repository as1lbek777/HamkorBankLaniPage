import React from "react";
import "./main.css"

const MainCards = [
    { name: "Barchasi", count: 38 },
    { name: "2024-yil", count: 3 },
    { name: "2023-yil", count: 4 },
    { name: "2022-yil", count: 4 },
    { name: "2021-yil", count: 3 },
    { name: "2020-yil", count: 4 },
    { name: "2019-yil", count: 4 },
    { name: "2018-yil", count: 4 },
    { name: "2017-yil", count: 5 },
    { name: "2016-yil", count: 6 },
    { name: "2015-yil", count: 1 },
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
                {/* <div className="section3 sectionflex">
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
                </div> */}
            </section>
        </>
    )
}

export default MainCard