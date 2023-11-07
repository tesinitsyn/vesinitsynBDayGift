import React from "react"

const projects = [
    {
        name: "Lead Software Engineer at WIO UAE, Abu Dhabi",
        date: "07/2021—Present",
        description:
            "Head the development of investment project. " +
            "We started the project by laying down the architecture and domains " +
            "decomposition and evaluating offers from our partners " +
            "Organized the process of work in our team (work with requirements, ways " +
            "of creating documentation, code style approach, ways of interaction with " +
            "the mobile team, testing approach).\n\n" +
            "Organized and supported the process of continuous improvements " +
            "(technical debt meetings, code improvements meetings, planning of " +
            "technical debt tasks for each of the sprints).\n" +
            "Communication with the product owner, requirements gathering, and " +
            "translation to developers’ language. Also, I took part in creating " +
            "requirements as I have experience in investment projects.\n\n" +
            "Planning of sprints, determining the team’s capacity, helping the team to " +
            "distribute the tasks among team members.\n" +
            "One on one meetings with developers, I provide feedback, receive feedback " +
            "and ensure that developers are happy or help them, to solve their problems, " +
            "also help them to determine directions for growth.\n" +
            "Created the portrait of the ideal team member based on values that all team " +
            "members share, which we use in our hiring process.\n\n" +
            "One of the goals was to make investments project an API provider that " +
            "allows further expansion to markets in other countries and partnership with " +
            "other companies ",
    },
    {
        name: "Lead Software Engineer at Vivid Money, Moscow ",
        date: "05/2019—07/2021",
        description: "Joined Vivid Money as a Java Developer in an Investment platform project, " +
            "gradually taking the role of technical leader. " +
            "My team developed from scratch two products: the Stock Rewards product " +
            "and the Investment product.\n" +
            "Stock Rewards - is the functionality of receiving cash backs in a form of " +
            "fractional shares.\n\n" +
            "Investments - investments functionality for retail customers.\n\n" +
            "We started the project by investigating the domain and laying down the " +
            "architecture and development process. " +
            "I was responsible for: \n\n" +
            "1. designing the architecture and its implementation\n" +
            "2. designing and developing interservice communications\n" +
            "3. communication with business leader \n" +
            "4. business tasks decomposition and distribution among backend " +
            "developers.\n\n" +
            "In Vivid Money, I also had a chance to practice a lot in one on one meetings, " +
            "goal settings, and developers' motivation. " +
            "As well obtained an experience in presentation of the results to the clients " +
            "and negotiations with partners. " +
            "In general, it was a cool experience of creating clean code projects with " +
            "rigorous code review processes and significant test coverage, that were " +
            "delivered to production and are successfully serving their clients.",
    },
    {
        name: "Software Developer at Tinkoff bank, Moscow",
        date: "04/2018—05/2019",
        description:
            "Was a part of the mortgage project team. Our team implemented a product " +
            "that allowed clients to submit their mortgage applications to multiple banks " +
            "and get the best offer. " +
            "We were developing the integration layer of the platform, this included the " +
            "development of the API for frontend, integration with core banking services " +
            "and business logic of mortgage application processing.\n" +
            "Also took part in the development of workforce management system, " +
            "we were solving the optimization problem of shift distribution among " +
            "employees. " +
            "In Tinkoff bank I made my first steps in leadership, leading a team of 2 " +
            "interns. ",
    },
    {
        name: "Java Developer at Sberbank, Moscow",
        date: "06/2017—04/2018",
        description:
            "My team was developing microservices for multiple directions of the PPRB " +
            "(Business Development Support Platform).\n" +
            "1. Orchestrator that implemented functionality of different money " +
            "transfers between accounts and deposits\n" +
            "2. Pricing engine\n" +
            "3. Internal application for modification of banking products (accounts, " +
            "cards) used by operators",
    },
    {
        name: "Junior Java Developer at AT Consulting, Moscow",
        date: "10/2015—06/2017",
        description:
            "Took part in two projects of the company. " +
            "In the first project, I was a part of the team which developed the client " +
            "personal account functionality for the real estate register system. " +
            "The second project is an internal product of the company, the “Catalog of " +
            "products\" used as a showcase of the company’s products. ",
    }
]

const ProjectsSection = () => {
    return (
        <section id="employment history">
            <h1 className="my-10 text-center font-bold text-4xl">
                Employment History
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28 ">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                                <div className=" animate-slideUpCubiBezier animation-delay-2  md:space-x-12 justify-center">
                                        <h1 className="text-2xl font-bold mb-6 ">{project.name}</h1>
                                        <h1 className="text-xl font bold mb-6 italic">{project.date}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap">
                                            {project.description}
                                        </p>
                                </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection