import React from "react";
import "./section.css"

const faylCard = [
    {
        id: 1,
        title: "2024 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 440 Kb",
        btn: true,
    },
    {
        id: 2,
        title: "2023 yil uchun yillik hisobot (17.05.2024)",
        type: "PDF, 895 Kb",
        btn: true,
    },
    {
        id: 3,
        title: "2024 yilning birinchi choragi uchun hisobot",
        type: "PDF, 399 Kb",
        btn: true,
    },
    {
        id: 4,
        title: "2023 yilning uchinchi choragi uchun hisobot",
        type: "PDF, 425 Kb",
        btn: true,
    },
    {
        id: 5,
        title: "2023 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 408 Kb",
        btn: true,
    },
    {
        id: 6,
        title: "2022 yil uchun yillik hisobot (26.05.2023)",
        type: "PDF, 667 Kb",
        btn: true,
    },
    {
        id: 7,
        title: "2023 yilning birinchi choragi uchun hisobot",
        type: "PDF, 415 Kb",
        btn: true,
    },
    {
        id: 8,
        title: "2022 yilning uchinchi choragi uchun hisobot",
        type: "PDF, 479 Kb",
        btn: true,
    },
    {
        id: 9,
        title: "2022 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 481 Kb",
        btn: true,
    },
    {
        id: 10,
        title: "2022 yilning birinchi choragi uchun hisobot",
        type: "PDF, 385 Kb",
        btn: true,
    },
    {
        id: 11,
        title: "2021 yil uchun yillik hisobot (28.06.2022)",
        type: "PDF, 432 Kb",
        btn: true,
    },
    {
        id: 12,
        title: "2021 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 233 Kb",
        btn: true,
    },
    {
        id: 13,
        title: "2020 yil uchun yillik hisobot (07.07.2021)",
        type: "PDF, 459 Kb",
        btn: true,
    },
    {
        id: 14,
        title: "2021 yilning birinchi choragi uchun hisobot",
        type: "PDF, 2 Mb",
        btn: true,
    },
    {
        id: 15,
        title: "2020 yilning uchinchi choragi uchun hisobot",
        type: "PDF, 154 Kb",
        btn: true,
    },
    {
        id: 16,
        title: "2020 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 421 Kb",
        btn: true,
    },
];
const Cards = () => {
    return (
        <div className="container flexcard">
            {
                faylCard.map(card => {
                    return (
                        <YearsCards {...card} />
                    )
                })
            }
        </div>
    )
}

function YearsCards(props) {
    const { title, btn, type, } = props;

    return (
        <div className="cards">
            <p className="p">&#x1F4C1;</p>
            <p className="p2">{title}</p>
            <div className="flexcardd">
                <p className="pdf">{type}</p>
                <button title="download" className="button2">{btn}&#10515;</button>
            </div>
        </div>
    );
}

export default Cards
