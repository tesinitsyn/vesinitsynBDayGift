"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/IMG_4862.jpg"
                        alt=""
                        width={325}
                        height={325}
                        className="shadow-2xl "
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Vladimir!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
                        with 6+ years of experience.
                    </p>
                    <ul className="text-lg mt-4 mb-6 md:text-2xl">
                        <li>&#8226; Launched in production two investment-related projects in Vivid Money</li>
                        <li>&#8226; Built strong highly-motivated team in WIO UAE, always help team members to
                            grow and have job satisfaction</li>
                        <li>&#8226; Always in close contact with business in order to fulfil our customers' needs</li>
                    </ul>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Employment History
                    </Link>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection