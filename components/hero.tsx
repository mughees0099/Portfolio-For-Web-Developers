"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

function Typical({ steps, loop }: any) {
  const [text, setText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const stepIndex = Math.floor(currentStep / 2);
      const isTyping = currentStep % 2 === 0;

      if (isTyping) {
        const targetText = steps[stepIndex];
        if (text.length < targetText.length) {
          setText(targetText.substring(0, text.length + 1));
        } else {
          setCurrentStep(currentStep + 1);
          clearInterval(interval);
        }
      } else {
        if (text.length > 0) {
          setText(text.substring(0, text.length - 1));
        } else {
          setCurrentStep((currentStep + 1) % (steps.length * 2));
          clearInterval(interval);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentStep, steps, text]);

  return <span>{text}</span>;
}

const contactLinks = [
  {
    name: "GitHub",
    url: "https://img.icons8.com/doodle/40/000000/github--v1.png",
    link: "https://github.com/mughees0099",
  },
  {
    name: "Stack Overflow",
    url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png",
    link: "https://stackoverflow.com/users/23281863/mughees",
  },
  {
    name: "LinkedIn",
    url: "https://img.icons8.com/doodle/40/000000/linkedin--v2.png",
    link: "https://www.linkedin.com/in/mughees-javed-5904b4290/",
  },
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744558254/cloudDark_b7auhq.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0f172a",
      }}
    >
      <main className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:mt-0 md:flex-row md:justify-between lg:px-8">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-white"
            >
              Hi, I am Mughees
            </motion.span>
            <span className="z-0 block text-blue-500 lg:inline">
              {isMounted && (
                <Typical
                  steps={[
                    "Front End Developer",
                    "Back End Developer",
                    "Mern Stack Developer",
                    "Full Stack Developer",
                  ]}
                  loop={Number.POSITIVE_INFINITY}
                />
              )}
            </span>
          </h1>
          <p className="mt-3 text-base text-white sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            I am a Front-End / Back-End / Full-Stack Developer.
          </p>
          <div className="flex md:justify-start">
            {contactLinks.map((el, index) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={el.link}
                target="_blank"
                rel="noreferrer"
                className="mr-5 mt-8 cursor-pointer text-white transition-transform hover:scale-125"
                key={el.name}
              >
                <Image
                  src={el.url}
                  alt={el.name}
                  className="hover:scale-125 transition-all duration-300"
                  width={40}
                  height={40}
                />
              </motion.a>
            ))}
          </div>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className=" text-white hover:bg-black/70"
              >
                Contact Me
              </Button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1yxgTyPZkd1pWGMcAOjeanyKc5r5dQb5Q"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-white hover:bg-black/70"
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
        <motion.img
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744558254/webdev_nhr6pz.svg"
          alt="Web Developer Illustration"
          className="md:w-3/6 hidden lg:block"
        />
      </main>
    </div>
  );
}
