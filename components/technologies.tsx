"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    color: "#fff",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    color: "#7952B3",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    color: "#fff",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    color: "#fff",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    color: "#fff",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    color: "#fff",
  },
  {
    name: "Mongo DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    color: "#fff",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    color: "#FF6C37",
  },
  {
    name: "Heroku",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
    color: "#fff",
  },
  {
    name: "Sanity",
    icon: "https://avatars.githubusercontent.com/u/17177659?s=200&v=4",
    color: "#F03E2F",
  },
  {
    name: "Cloudinary",
    icon: "https://www.svgrepo.com/show/353566/cloudinary.svg",
    color: "#3448C5",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    color: "#fff",
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Technologies and Tools
          </h2>
          <div className="mx-auto h-1 w-20 bg-blue-500"></div>
          <p className="mt-4 text-lg text-gray-300">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant websites for
            smartphones, tablets, and desktops.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl"
            >
              <div
                className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 p-3"
                style={{ backgroundColor: tech.color }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              </div>

              <h3 className="text-sm font-medium text-gray-200">{tech.name}</h3>

              {/* Animated glow effect on hover */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
