import React from "react";
import "./footer.css";

// const footer = [
//     { title: "Filiallar va bankomatlar" },
//     { title: "Valyuta kurslari" },
//     { title: "Shaxsiy hisob" },
//     { title: "Fikr-mulohaza" },
//     { title: "Jismoniy shaxslar uchun" },
//     { title: "Biznes uchun" },
//     { title: "Fin. tashkilotlar" },
//     { title: "Bank haqida" },
//     { title: "Matbuot markazi" },
//     { title: "Tafsilotlar" },
//     { title: "Internet-banking" },
//     { title: "Mobil bank" },
// ]

// const footer1 = () => {
//     return (
//         <div className="mt flex_ds_ac_js">
//             {
//                 footer.map((fot) => {
//                     return (
//                         < FooterCards {...fot} />
//                     )
//                 })
//             }
//         </div>
//     )
// }

const FooterCards = () => {
    return (
        <>
            <div className="footer1"></div>
            <footer class="container footer">
                <div class="footer-column">
                    <h2>0 (800) 1 200 200,1256</h2>
                    <p>Qo'ng'iroqlar markazi</p>
                    <h2>+ 998 (78) 150 91 25</h2>
                    <p>Ishonch telefoni</p>
                    <button class="btn">Korruptsiya haqida xabar bering</button>
                </div>

                <div class="footer-column">
                    <a href="#">Filiallar va bankomatlar</a>
                    <a href="#">Valyuta kurslari</a>
                    <a href="#">Shaxsiy hisob</a>
                    <a href="#">Fikr-mulohaza</a>
                </div>

                <div class="footer-column">
                    <a href="#">Jismoniy shaxslar uchun</a>
                    <a href="#">Biznes uchun</a>
                    <a href="#">Fin. tashkilotlar</a>
                    <a href="#">Bank haqida</a>
                </div>

                <div class="footer-column">
                    <a href="#">Matbuot markazi</a>
                    <a href="#">Tafsilotlar</a>
                    <a href="#">Internet-banking</a>
                </div>
            </footer>
        </>
    )
}

export default FooterCards