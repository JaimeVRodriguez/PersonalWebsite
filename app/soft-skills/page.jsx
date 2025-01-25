"use client";

import {motion} from "framer-motion";

const softSkills = [
    {
        num: "01",
        title: "Versatile",
        description: "I consistently pursue knowledge and learning, demonstrated by advancing through various roles in " +
            "my military career. I continually expand my expertise, test my abilities, and gain confidence in mastering " +
            "new skills. My ambitious personality aligns well with diverse cultures."
    },
    {
        num: "02",
        title: "Passionate",
        description: "What began as a hobby led me to pursue a career in software development. I have expertise in " +
            "object-oriented languages like Java and C#, self-taught Python, and experience with frameworks such as " +
            "React and Spring Boot. Additionally, I am proficient in version control systems like GitLab and GitHub."
    },
    {
        num: "03",
        title: "Collaborative",
        description: "I have led and collaborated with teams of 5 to 15, including software development groups. These " +
            "experiences have taught me the value of collaboration and self-awareness, enabling me to thrive in both " +
            "autonomous and team environments."
    },
    {
        num: "04",
        title: "Problem Solver",
        description: "I excel at identifying challenges and developing effective solutions. My analytical thinking and " +
            "resourcefulness enable me to tackle complex issues efficiently, ensuring project success and continuous " +
            "improvement."
    },
];

const SoftSkills = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {softSkills.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div
                                        className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SoftSkills;
