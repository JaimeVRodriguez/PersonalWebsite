"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import emailjs from "emailjs-com";
import {useState} from "react";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(206) 399-9083",
        link: "tel:2063999083",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "jaime.v.rodriguez@icloud.com",
        link: "mailto:jaime.v.rodriguez@icloud.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Location",
        description: "Fayetteville, North Carolina",
        link: "#",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
                "service_glmmmyo", // Replace with your EmailJS service ID
                "template_q269468", // Replace with your EmailJS template ID
                {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    phone: formData.phone,
                    topic: formData.topic,
                    message: formData.message,
                },
                "RWOhT-CBzl2JTJJ4F" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    alert("Your message has been sent!");
                    setFormData({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        topic: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    alert("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={sendEmail}
                        >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I enjoy expanding my network and creating new relationships. If
                                you have any questions, would like to connect regarding an
                                opportunity, or simply want to expand your network feel free to
                                reach out!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="firstname"
                                    type="text"
                                    placeholder="Firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="lastname"
                                    type="text"
                                    placeholder="Lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Select
                                onValueChange={(value) => setFormData({ ...formData, topic: value })}
                                value={formData.topic}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a topic"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a topic</SelectLabel>
                                        <SelectItem value="job">Job Opportunity</SelectItem>
                                        <SelectItem value="net">Networking</SelectItem>
                                        <SelectItem value="col">Collaboration</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                name="message"
                                placeholder="Type your message here."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <Button type="submit" size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center cursor-pointer hover:bg-opacity-80 hover:scale-105 transition-transform duration-200"
                                        onClick={() =>
                                            window.location.href = item.link
                                        }
                                    >
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;