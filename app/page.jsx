"use client"

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import ShaderBackground from "@/components/ShaderBackground";
import Link from "next/link";

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Jaime_Rodriguez_Resume.pdf";
    link.download = "Jaime_Rodriguez.pdf";
    link.click();
  };

  return (
    <section>
      {/* Full-screen hero with shader background */}
      <div className="relative w-full h-screen overflow-hidden bg-primary">
        <ShaderBackground />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
          {/* Role Badge */}
          <div className="mb-8 animate-fade-in-down">
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/10 backdrop-blur-md border border-accent/30 rounded-full text-sm">
              <span className="text-accent/90">Software Engineer</span>
            </div>
          </div>

          <div className="text-center space-y-6 max-w-5xl mx-auto">
            {/* Name with gradient */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                Jaime V.
              </h1>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                Rodriguez
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              <p className="text-lg md:text-xl xl:text-2xl text-white/80 font-light leading-relaxed">
                Dedicated professional passionate about designing and building
                scalable software solutions that would serve the tech industry of today and the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-primary rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/25 border-none"
                onClick={handleResumeDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="uppercase px-8 py-4 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                asChild
              >
                <Link href="/work">View Work</Link>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="animate-fade-in-up animation-delay-800 pt-4">
              <Social
                containerStyles="flex gap-6 justify-center"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          {/* Stats at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 animate-fade-in-up animation-delay-800">
            <div className="bg-white/5 backdrop-blur-md border-t border-white/10">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
