import React from "react"
import {BsLinkedin, BsInstagram, BsTelegram} from "react-icons/bs"
import Link from "next/link"

const skills = [
    {skill: "Java"},
    {skill: "Spring"},
    {skill: "Apache Kafka"},
    {skill: "PostgreSQL"},
    {skill: "AWS"},
    {skill: "Microsoft Azure"},
    {skill: "Redis"},
    {skill: "Git"},
    {skill: "Kubernetes"},
    {skill: "REST"},
    {skill: "Grpc"},
    {skill: "FIX protocol"},
    {skill: "Contract-First Design"}
]

const languages = [
    {
        language: "English C1"
    },
    {
        language: "Russian Native"
    },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div
                    className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">💪 My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                        <br/>
                        <h1 className="text-2xl font-bold mb-6">🌐 Languages</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {languages.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
                                    >
                                        {item.language}
                                    </p>
                                )
                            })}
                        </div>
                        <br/>
                        <h1 className="text-2xl font-bold mb-6">🎓 Education</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">Bachelor,
                                Software Engineering, HSE, Moscow</p>
                            <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">GPA 8.19</p>
                        </div>
                        <br/>
                        <h1 className="text-2xl font-bold mb-6">☎️ Socials</h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            <Link href="https://www.linkedin.com/in/vladimir-sinitsyn-754316159/" rel="noreferrer" target="_blank">
                                <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">
                                    {/*<BsLinkedin*/}
                                    {/*    size={20}*/}
                                    {/*    className="hover:-translate-y-1 transition-transform cursor-pointer"*/}
                                    {/*/>*/}
                                    LinkedIn</p>
                            </Link>
                            <Link href="https://instagram.com/volodyakisataisa?igshid=MmVlMjlkMTBhMg==" rel="noreferrer" target="_blank">
                                <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">
                                    {/*<BsInstagram*/}
                                    {/*    size={20}*/}
                                    {/*    className="hover:-translate-y-1 transition-transform cursor-pointer"*/}
                                    {/*/>*/}
                                    Instagram</p>
                            </Link>
                            <Link href="https://t.me/vesinitsyn" rel="noreferrer" target="_blank">
                                <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold">
                                    {/*<BsTelegram*/}
                                    {/*    size={20}*/}
                                    {/*    className="hover:-translate-y-1 transition-transform cursor-pointer"*/}
                                    {/*/>*/}
                                    Telegram</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection