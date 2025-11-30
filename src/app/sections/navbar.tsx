import { useEffect, useState } from "react";
import { FaLanguage } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";
import { getNavbar } from "../utils/getNavbar";
import type { Navbar } from "../data/interfaces"
import { useLanguage } from "../context/languageContext";
import { useTheme } from "../context/themeContext";

export default function Navbar() {
    /* CONTEXTS */
    // Language Context 
    const { lang, setLang } = useLanguage();
    // Theme Context
    const { darkMode, toggleTheme, isAnimating } = useTheme();

    // Navbar Json
    const navlist: Navbar[] = getNavbar(lang);

    /* SCROLL LOGIC */
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);



    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Mostrar si estás cerca del top
            if (currentScroll < 20) {
                setShow(true);
                setLastScroll(currentScroll);
                return;
            }

            // Scroll hacia abajo: ocultar
            if (currentScroll > lastScroll) {
                setShow(false);
            } else {
                // Scroll hacia arriba: mostrar
                setShow(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    // Mostrar si el mouse está en la parte superior de la pantalla
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 20) {
                setShow(true);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className={`fixed top-0 w-full flex justify-center transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="mt-6 flex ">

                {/* NAVBAR PRINCIPAL */}
                <div className={`w-[75vw] ${darkMode ? "bg-black text-white" : "bg-white text-black"} rounded-sm shadow-black shadow-lg h-12 flex items-center justify-between px-6 dark:shadow-white`}>
                    <div className="flex items-center ml-6 gap-80">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 140 160"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-colors text-black dark:text-white"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M16.0182 7.04321V1.04858H27.7958L112.598 120.124V10.8731L109.601 7.04321H97.9447V1.04858H138.242V7.04321H125.753L123.255 10.8731V141.09H118.528L21.6798 7.04321H16.0182Z" />
                            <path d="M123.257 152.052V158.046H111.48L26.6771 38.9705V148.222L29.6744 152.052H41.3307V158.046H1.03345V152.052H13.5223L16.02 148.222V18.0051H20.7473L117.596 152.052H123.257Z" />
                        </svg>
                        <h1 className="ml- text-2xl font-MPMomo text-emerald-500">
                            Angel Marin
                        </h1>
                    </div>

                    <div className="flex justify-around w-1/3 font-MMomo">
                        <a
                            onClick={() =>
                                window.open(navlist[0].CV,
                                    "_blank"
                                )
                            }
                            className="text-lg font-semibold hover:text-emerald-500 cursor-pointer">

                            {navlist[0].content1}
                        </a>
                        <a className="text-lg font-semibold hover:text-emerald-500 cursor-pointer">{navlist[0].content2}</a>
                        <a className="text-lg font-semibold hover:text-emerald-500 cursor-pointer">{navlist[0].content3}</a>
                    </div>
                </div>

                <div
                    className="fixed top-0 z-20 mt-6 cursor-pointer"
                    style={{ right: "calc((100% - 75%) / 2.5 - 3.5rem)" }}
                    onClick={() => setLang(lang === "en" ? "es" : "en")}
                >
                    <div className="w-20 h-12 bg-white dark:bg-black rounded-sm shadow-black shadow-lg flex items-center justify-center dark:shadow-white">
                        <FaLanguage size={48} />
                    </div>
                </div>


                <div
                    className="fixed top-0 z-20 mt-6 cursor-pointer"
                    style={{ right: "calc((100% - 75%) / 5.5 - 3.5rem)" }}
                    onClick={toggleTheme}
                >
                    <div className="w-20 h-12 bg-white dark:bg-black rounded-sm shadow-black shadow-lg flex items-center justify-center dark:shadow-white relative">

                        {/* SUN ICON */}
                        <AiFillSun
                            size={34}
                            className={`absolute transition-all duration-500 transform ${isAnimating ? "pointer-events-none" : ""} ${darkMode ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
                        />

                        {/* MOON ICON */}
                        <FaMoon
                            size={28}
                            className={`absolute transition-all duration-500 transform ${isAnimating ? "pointer-events-none" : ""} ${darkMode ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}
