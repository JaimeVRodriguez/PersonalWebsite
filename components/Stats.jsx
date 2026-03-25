"use client";

import CountUp from "react-countup";

const stats = [
    {num: 15, text: "Years of Army experience"},
    {num: 4, text: "Years of development experience"},
    {num: 3, text: "Innovative tools built"},
    {num: 2, text: "Times placed in Hackathons"},
    {num: 8, text: "Team Members Mentored"}
];

const Stats = () => {
    return (
        <section className="py-4 xl:py-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center xl:justify-between gap-x-8 gap-y-4">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex gap-3 items-center"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={0.5}
                                    className="text-3xl xl:text-5xl font-extrabold text-accent"
                                />
                                <p
                                    className={`${
                                        item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                    } leading-snug text-white/80 text-sm`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
