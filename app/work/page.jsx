"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "fullstack",
        title: "ghostmachine",
        description:
            "An application leveraging locally hosted AI/ML models, such as Llama3 and Stable Diffusion, to assist " +
            "Special Operations (Psychological Operations) Soldiers in generating digital product prototypes for " +
            "operational use. It provides a suite of tools for prompt generation, image and voice creation, and text " +
            "translation, enabling Soldiers to quickly develop and iterate on multimedia content for their missions.",
        stack: [{name: "Typescript"}, {name: "React"}, {name: "Java"}, {name: "Spring"}, {name: "PostgreSQL"}],
        image: "/assets/work/ghostmachine_mock.png",
        live: {isLive: false, url: ""},
        github: {isLive: false, url: ""}
    },
    {
        num: "02",
        category: "fullstack",
        title: "disaster response mapping",
        description:
            "Developed during a hackathon hosted by the Army Software Factory and Palantir, this OSDK app supported " +
            "disaster response efforts by visualizing data on disaster locations using Leaflet. Integrated " +
            "Palantir-hosted datasets to enable users to locate nearby Army units (with response capabilities) and " +
            "hospitals (with bed availability) within a specified radius..",
        stack: [{name: "Typescript"}, {name: "React"}, {name: "Palantir Foundry"}, {name: "Leaflet"}],
        image: "/assets/work/palantir_mock.png",
        live: {isLive: false, url: ""},
        github: {isLive: false, url: ""}
    },
    {
        num: "03",
        category: "frontend",
        title: "soldier solutions",
        description:
            "The forward-facing website for the Army Software Factory, designed to centralize information about the " +
            "factory's mission, projects, and career opportunities. I contributed to refactoring and redesigning the " +
            "site, enhancing both the user interface and the overall user experience. The website now serves as an " +
            "engaging and accessible hub for learning about past and current projects, and provides clear pathways for " +
            "joining the Army Software Factory's innovative initiatives.",
        stack: [{name: "Typescript"}, {name: "Next.js"}, {name: "Tailwind.css"}],
        image: "/assets/work/swf_mock.png",
        live: {isLive: true, url: "https://soldiersolutions.swf.army.mil"},
        github: {isLive: false, url: ""}
    },
    {
        num: "04",
        category: "fullstack",
        title: "backtrack",
        description:
            "Developed during a 24-hour hackathon with a retro theme. Our team created a retro music player that " +
            "streamed songs from the 70s, 80s, and 90s, integrating Google Gemini to provide real-time song lyrics. " +
            "This project was part of a Major League Hacking sanctioned event, where we received the award for Best " +
            "Presentation and achieved 2nd place overall.",
        stack: [{name: "Typescript"}, {name: "React"}, {name: "Java"}, {name: "Spring"}, {name: "PostgreSQL"}],
        image: "/assets/work/backtrack_mock.png",
        live: {isLive: true, url: "https://devpost.com/software/backtrack-e56qly"},
        github: {isLive: true, url: "https://github.com/JaimeVRodriguez/Riverbat_Hackathon"}
    },
    {
        num: "05",
        category: "fullstack",
        title: "rollout",
        description:
            "An equipment tracking tool designed to support military units during the deployment process. It provides " +
            "a centralized platform for tracking equipment, its location, and any deficiencies identified. By enabling " +
            "users to view and update equipment status in real time, Roll-Out significantly reduces repetitive tasks " +
            "associated with previous methods, streamlining the deployment workflow and improving overall efficiency.",
        stack: [{name: "Typescript"}, {name: "React"}, {name: "Java"}, {name: "Spring"}, {name: "PostgreSQL"}],
        image: "/assets/work/rollout_mock.png",
        live: {isLive: false, url: ""},
        github: {isLive: false, url: ""}
    },
    {
        num: "06",
        category: "data analytics",
        title: "USASOC selection analysis",
        description:
            "Culminating project as a part of the Galvanize Data Analytics Immersive Course. Analyzes Special " +
            "Operations selection data for the Special Forces and Psychological Operations Career fields. After " +
            "conducting exploratory data analysis, further work was done to create a selection result predictive model " +
            "based on the available attributes of prospective candidates..",
        stack: [{name: "Python"}, {name: "Pandas"}, {name: "NumPy"}, {name: "SciPy"}, {name: "Matplotlib"}],
        image: "/assets/work/dai_mock.png",
        live: {isLive: false, url: ""},
        github: {isLive: true, url: "https://github.com/JaimeVRodriguez/sof_selection_analysis"}
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                {project.live.isLive && (
                                    <Link href={project.live.url} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight
                                                        className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}

                                {/* github project button */}
                                {project.github.isLive && (
                                    <Link href={project.github.url} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div
                                            className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div
                                                className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                projectIndex={project.num}
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
