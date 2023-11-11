"use client" // this is a client component
import React from "react"
import {useState} from "react"
import {Link} from "react-scroll/modules"
import {usePathname} from "next/navigation"
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"
import {Button} from "react-scroll";
import * as url from "url";

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Employment history",
        page: "employment history",
    },
]

const pdf_url="http://localhost:3000/CV.pdf"

export default function Navbar() {
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false)
    const downloadCV=(url: string)=>{
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        if (typeof fileName === "string") {
            aTag.setAttribute("download", fileName);
        }
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <header
            className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-neutral-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="home">
                            <div className="container flex items-center space-x-2">
                                <h2 className="text-2xl font-bold ">Vladimir Sinitsyn</h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            <button onClick={()=>{downloadCV(pdf_url)}} className={
                                "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                            }>Download CV</button>
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                >
                                    Change Theme
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                >
                                    Change Theme
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}