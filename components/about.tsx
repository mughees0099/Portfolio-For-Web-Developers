"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-20 bg-blue-500"></div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-xl">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744559595/benefits-of-coding-e1606911064541_ors0cm.jpg')",
                }}
              ></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <span className="text-5xl font-bold text-white">5+</span>
                  <div className="absolute -inset-1 animate-spin-slow rounded-full border-2 border-dashed border-white/30"></div>
                </div>
              </div>

              <div className="absolute bottom-0 w-full bg-black/30 p-4 text-center backdrop-blur-md">
                <p className="text-lg font-semibold text-white">
                  Years of Experience
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute left-10 top-10 h-10 w-10 animate-float-slow rounded-full bg-blue-400/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-20 right-10 h-6 w-6 animate-float-medium rounded-full bg-blue-400/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-40 left-20 h-8 w-8 animate-float-fast rounded-full bg-blue-400/30 backdrop-blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="mb-4 text-2xl font-bold text-blue-400">
              A bit about me
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              I am a Full-Stack Developer with over 5+ years of experience
              specializing in the MERN stack. I create dynamic, responsive, and
              user-friendly web applications using technologies like React,
              Node.js, Express, and MongoDB. I am dedicated to delivering
              high-quality code and innovative solutions, ensuring optimal
              performance on both desktop and mobile devices.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant websites for
              smartphones, tablets, and desktops.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                Problem Solver
              </span>
              <span className="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                Creative Thinker
              </span>
              <span className="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                Team Player
              </span>
              <span className="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                Detail Oriented
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
