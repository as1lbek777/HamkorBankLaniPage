import React from "react";
import "./section.css"

// const BankCards = [
//     {
//         id: 1,
//         name: "Visa Classic",
//         type: "sayohat uchun",
//         currence: ["USD", "EVRO"],
//         price: "bepul",
//         description: "Karta dizayni",
//         features: "Komissiya yo'q",
//         description2: "Hamkorbank terminallari orqali naqd pul yechib olish, o‘tkazish va to‘lovlarni amalga oshirish",
//         features2: "Tez tarjimalar",
//         description3: "Biz uni bir daqiqa ichida yuboramiz",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/visa-exchange/visa_preview.37fe5755.webP",
//         BtnCards: false,
//     },
//     {
//         id: 2,
//         name: "HUMO",
//         type: "xarid qilish uchun",
//         currences: ["so'm miqdorida mablag' ajratildi"],
//         price: "3 kundan boshlab",
//         description: "Ishlab chiqish",
//         features: "Bepul",
//         description2: "Onlayn karta uchun ariza bering",
//         features2: "Komissiya yo'q",
//         description3: "Arizada 5 million so‘mgacha pul o‘tkazmalari",
//         image: "https://hamkorbank.uz/assets/images-cache/products/humo/humo_preview.37fe5755.webP",
//         BtnCards: true,
//     },
//     {
//         id: 3,
//         name: "UZCARD",
//         type: "Xarid qilish uchun",
//         currences: ["so'm miqdorida mablag' ajratildi"],
//         price: "30 000 so'm",
//         description: "Karta dizayni",
//         features: "Bepul",
//         description2: "Kartaga texnik xizmat ko'rsatish",
//         features2: "komissiya yo'q",
//         description3: "Oʻzbekiston boʻylab toʻlov",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/uzcard/uzcard_preview.37fe5755.webP",
//         BtnCards: true,
//     },
//     {
//         id: 4,
//         name: "UZCARD UnionPay",
//         type: "xarid qilish uchun",
//         currences: ["so'm miqdorida mablag' ajratildi", "USD"],
//         price: "35 000 so'm",
//         description: "Xizmat va dizayn",
//         features: "Komissiya yo'q",
//         description2: "Bepul to'lovlar va pul o'tkazmalari",
//         features2: "Tez tarjimalar",
//         description3: "Biz uni bir daqiqa ichida yuboramiz",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/uzcard-unionpay/uzcard_unionpay_preview.37fe5755.webP",
//         BtnCards: true,
//     },
//     {
//         ID: 5,
//         name: "HUMO vizasi",
//         type: "Xarid qilish uchun",
//         currences: ["so'm miqdorida mablag' ajratildi", "USD"],
//         price: "30 000 so‘m",
//         description: "Xizmat va dizayn",
//         features: "Komissiya yo'q",
//         description2: "Bepul to'lovlar va pul o'tkazmalari",
//         features2: "Tez tarjimalar",
//         description3: "Biz uni bir daqiqa ichida yuboramiz",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/humo-visa/humo_visa_preview.37fe5755.webP",
//         BtnCards: true,
//     },
//     {
//         ID: 6,
//         name: "UnionPay QuickPass Classic",
//         type: "Sayohat uchun",
//         currences: ["USD"],
//         price: "bepul",
//         description: "Xizmat va dizayn",
//         features: "Komissiya yo'q",
//         description2: "Hamkorbank terminallari orqali naqd pul yechib olish, o‘tkazish va to‘lovlarni amalga oshirish",
//         features2: "Tez tarjimalar",
//         description3: "Biz uni bir daqiqa ichida yuboramiz",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/unionpay/unionpay_preview.37fe5755.webP",
//         BtnCards: false,
//     },
//     {
//         ID: 7,
//         name: "Visa Platinum",
//         type: "Premium",
//         currences: ["USD"],
//         price: "120 000 so'm",
//         description: "Rezidentlar uchun kartani ro'yxatdan o'tkazish va unga xizmat ko'rsatish",
//         features: "Komissiya yo'q",
//         description2: "Hamkorbank terminallari orqali naqd pul yechib olish, o‘tkazish va to‘lovlarni amalga oshirish",
//         features2: "Tez tarjimalar",
//         description3: "Biz uni bir daqiqa ichida yuboramiz",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/visa-platinum/visa_platinum_preview.37fe5755.webP",
//         BtnCards: true,
//     },
//     {
//         ID: 8,
//         name: "Visa Infinite",
//         type: "Premium",
//         currences: ["USD"],
//         price: "200 000 so'm",
//         description: "Rezidentlar uchun kartani ro'yxatdan o'tkazish va unga xizmat ko'rsatish",
//         features: "Komissiya yo'q",
//         description2: "Hamkorbank terminallari orqali naqd pul yechib olish, o‘tkazish va to‘lovlarni amalga oshirish",
//         features2: "Tez tarjimalar",
//         description3: "Biz uni bir daqiqa ichida yuboramiz",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/visa-infinite/visa_infinite_preview.37fe5755.webP",
//         BtnCards: true,
//     },
//     {
//         ID: 9,
//         name: "Visa Virtual",
//         type: "Onlayn xarid qilish uchun",
//         currences: ["USD"],
//         price: "bepul",
//         description: "Onlayn buyurtma berishda xizmat ko'rsatish va qayta ishlash",
//         features: "Komissiya yo'q",
//         description2: "5 million so'mgacha bepul to'lovlar va o'tkazmalar",
//         features2: "7 soniya ichida dizayn",
//         description3: "Hamkor ilovasida",
//         image: "https://hamkorbank.uz/assets/images-cache/products/physical/visa-virtual/visa_virtual_preview.37fe5755.webP",
//         BtnCards: true,
//     }
// ];

// const Bank = () => {
//     return (
//         <div className="card-list container">
//             {BankCards.map((card) => (
//                 <div key={card.ID} className="card4" >
//                     <div className="dsflex">
//                         <div>
//                             <p className="type">{card.type}</p>
//                             <h3 className="name1">{card.name}</h3>
//                             <div className="flexcard">
//                                 <div className="cardPrice">
//                                     <p className="title1">{card.price}</p>
//                                     <p>{card.description}</p>
//                                 </div>
//                                 <div className="cardPrice">
//                                     <p className="title1">{card.features}</p>
//                                     <p>{card.description2}</p>
//                                 </div>
//                                 <div className="cardPrice">
//                                     <p className="title1">{card.features2}</p>
//                                     <p>{card.description3}</p>
//                                 </div>
//                             </div>
//                             <button>Ko'proq ko'rish</button>
//                         </div>
//                         <div>
//                             <img className="img" src={card.image} alt={card.name} />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Bank;


const faylCard = [
    {
        id: 1,
        fayl: "📑",
        title: "2024 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 440 Kb",
        btn: true,
    },
    {
        id: 2,
        fayl: "📑",
        title: "2023 yil uchun yillik hisobot (17.05.2024)",
        type: "PDF, 895 Kb",
        btn: true,
    },
    {
        id: 3,
        fayl: "📑",
        title: "2024 yilning birinchi choragi uchun hisobot",
        type: "PDF, 399 Kb",
        btn: true,
    },
    {
        id: 4,
        fayl: "📑",
        title: "2023 yilning uchinchi choragi uchun hisobot",
        type: "PDF, 425 Kb",
        btn: true,
    },
    {
        id: 5,
        fayl: "📑",
        title: "2023 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 408 Kb",
        btn: true,
    },
    {
        id: 6,
        fayl: "📑",
        title: "2022 yil uchun yillik hisobot (26.05.2023)",
        type: "PDF, 667 Kb",
        btn: true,
    },
    {
        id: 7,
        fayl: "📑",
        title: "2023 yilning birinchi choragi uchun hisobot",
        type: "PDF, 415 Kb",
        btn: true,
    },
    {
        id: 8,
        fayl: "📑",
        title: "2022 yilning uchinchi choragi uchun hisobot",
        type: "PDF, 479 Kb",
        btn: true,
    },
    {
        id: 9,
        fayl: "📑",
        title: "2022 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 481 Kb",
        btn: true,
    },
    {
        id: 10,
        fayl: "📑",
        title: "2022 yilning birinchi choragi uchun hisobot",
        type: "PDF, 385 Kb",
        btn: true,
    },
    {
        id: 11,
        fayl: "📑",
        title: "2021 yil uchun yillik hisobot (28.06.2022)",
        type: "PDF, 432 Kb",
        btn: true,
    },
    {
        id: 12,
        fayl: "📑",
        title: "2021 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 233 Kb",
        btn: true,
    },
    {
        id: 13,
        fayl: "📑",
        title: "2020 yil uchun yillik hisobot (07.07.2021)",
        type: "PDF, 459 Kb",
        btn: true,
    },
    {
        id: 14,
        fayl: "📑",
        title: "2021 yilning birinchi choragi uchun hisobot",
        type: "PDF, 2 Mb",
        btn: true,
    },
    {
        id: 15,
        fayl: "📑",
        title: "2020 yilning uchinchi choragi uchun hisobot",
        type: "PDF, 154 Kb",
        btn: true,
    },
    {
        id: 16,
        fayl: "📑",
        title: "2020 yilning ikkinchi choragi uchun hisobot",
        type: "PDF, 421 Kb",
        btn: true,
    },
];
const Cards = () => {
    return (
        <div>
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

const YearsCards = (props) => {
    const { id, title, btn, type, fayl } = props;

    return (
        <div className="container">
            <div className="flex2">
                <div className="card5">
                    <div>
                        <p className="p">{fayl}</p>
                        <p className="p2">{title}</p>
                        <p className="pdf">{type}</p>
                        <button className="button2">{btn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards