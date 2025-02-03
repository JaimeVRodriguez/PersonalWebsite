"use client";

import {FaDatabase, FaGit, FaGitlab, FaJava, FaPython, FaReact,} from "react-icons/fa";
import {
    SiAxios,
    SiDocker,
    SiJunit5,
    SiJupyter,
    SiMui,
    SiNumpy,
    SiPandas,
    SiPostgresql,
    SiScikitlearn,
    SiScipy,
    SiSpring,
    SiTypescript,
    SiVitest
} from "react-icons/si";
import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";

const about = {
    title: "About Me",
    description:
        "I have served in the U.S. Army for the past 15 years. The last 3 of which have been in Special Operations as " +
        "a Data Analyst and Software Engineer. I have served on small collaborative teams in ambiguous missions across " +
        "the world to include the U.S. Embassy Kiev, Ukraine. ",
    info: [
        {fieldName: "Name", fieldValue: "Jaime V. Rodriguez"},
        {fieldName: "Phone", fieldValue: "(206) 399-9083"},
        {fieldName: "Experience", fieldValue: "4 Years"},
        {fieldName: "Clearance", fieldValue: "Top Secret - SCI"},
        {fieldName: "Email", fieldValue: "jaime.v.rodriguez@icloud.com"},
    ],
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "Dedicated and versatile professional with extensive experience in technology, data analysis, and " +
        "leadership roles within the US Army's Special Operations. Currently serving as an Associate Software Engineer, " +
        "leveraging expertise in full-stack development, AI integration, and advanced data solutions.",
    items: [
        {
            company: "US Army Special Operations AI Division",
            position: "Associate Software Engineer",
            duration: "2024 - Present",
        },
        {
            company: "US Army Software Factory",
            position: "Junior Software Engineer",
            duration: "2023 - 2024",
        },
        {
            company: "US Army Special Operations Data Team",
            position: "Data Analyst",
            duration: "2022 - 2023",
        },
        {
            company: "US Army Special Operations Recruiting Battalion",
            position: "Talent Acquisition Specialist",
            duration: "2019 - 2022",
        },
        {
            company: "US Army Special Operations",
            position: "Market Research Analyst",
            duration: "2016 - 2019",
        },
        {
            company: "US Army",
            position: "Supervisory Training Specialist",
            duration: "2009 - 2016",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
        "A strong academic foundation in data science, software development, and analytics, emphasizing both technical " +
        "expertise and practical application. My education reflects a commitment to continuous " +
        "learning and professional growth, preparing me to excel in dynamic, technology-driven environments.",
    items: [
        {
            institution: "Eastern University",
            degree: "M.S. in Data Science",
            duration: "December 2024",
        },
        {
            institution: "Linux Foundation",
            degree: "Programming in Rust",
            duration: "August 2024",
        },
        {
            institution: "Galvanize",
            degree: "Data Analytics Immersive Program",
            duration: "February 2023",
        },
        {
            institution: "Bellevue University",
            degree: "B.S. in Software Development",
            duration: "May 2021",
        },
        {
            institution: "N.C. State University",
            degree: "Executive in Residence",
            duration: "November 2020",
        },
        {
            institution: "Fayetteville Tech Community College",
            degree: "A.A. in General Education",
            duration: "December 2018",
        }
    ],
};

const skills = {
    title: "My Skills",
    description:
        "Versatile and experienced in a wide range of modern technologies, frameworks, and tools, with a focus on " +
        "delivering scalable, efficient, and innovative solutions. Continuously expanding expertise to stay at the " +
        "forefront of industry trends and best practices.",
    skillList: [
        {icon: <SiTypescript/>, name: "typescript"},
        {icon: <FaReact/>, name: "react.js"},
        {icon: <SiVitest/>, name: "vitest"},
        {icon: <FaJava/>, name: "java"},
        {icon: <SiSpring/>, name: "spring"},
        {icon: <SiJunit5/>, name: "junit"},
        {icon: <FaDatabase/>, name: "sql"},
        {icon: <SiPostgresql/>, name: "postgresql"},
        {icon: <SiDocker/>, name: "docker",},
        {icon: <FaGit/>, name: "git"},
        {icon: <FaGitlab/>, name: "gitlab"},
        {icon: <SiAxios/>, name: "axios"},
        {icon: <SiMui/>, name: "mui"},
        {icon: <FaPython/>, name: "python"},
        {icon: <SiPandas/>, name: "pandas"},
        {icon: <SiNumpy/>, name: "numpy"},
        {icon: <SiScipy/>, name: "scipy"},
        {icon: <SiScikitlearn/>, name: "scikit-learn"},
        {icon: <SiJupyter/>, name: "jupyter"}
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger
                                                                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div
                                                                    className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
