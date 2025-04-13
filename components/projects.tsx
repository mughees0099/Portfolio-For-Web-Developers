"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const projects = [
  {
    id: 1,
    title: "IPSEC",
    description:
      "I designed and developed the official website for IPSEC, a premier IT training institute providing government-funded courses to students. Built using the MERN stack, the platform offers a seamless user experience with course listings, student enrollment management, and an intuitive dashboard.",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744390944/image_original_t94z8c.png",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://ipsec.com.pk/",
  },

  {
    id: 2,
    title: "Pseb",
    description:
      "The PSEB Portal by the Pakistan Software Export Board offers free IT courses. Students can apply and track applications, while admins manage data, approve/reject applications, and track attendance.",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744562379/Screenshot_2025-04-13_213926_bcdjqd.png",
    tags: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Chart.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Contentful",
      "Cloudinary",
    ],
    link: "https://portal.ipsec.com.pk/",
  },
  {
    id: 3,
    title: "Dine Market  ",
    description:
      "A full-featured e-commerce platform built with the MERN stack, featuring product management, cart functionality, and payment processing.",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1731321124/Screenshot_2024-11-11_153146_z5cx9a.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://dine-market.netlify.app/",
  },
  {
    id: 4,
    title: "Corvit",
    description:
      "Corvit is a premier educational institute specializing in IT courses, offering comprehensive training programs to equip students with industry-relevant skills",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1731311698/Screenshot_2024-11-11_124749_osyp8z.png",
    tags: ["React", "Tailwind CSS", "Contentful"],
    link: "https://corvit.edu.pk/",
  },

  {
    id: 5,
    title: "Shopify Store",
    description:
      " This project is a modern e-commerce website built using Next.js and powered by Shopify Headless UI. It combines the flexibility of Next.js for a seamless user experience with the robust backend capabilities of Shopify for efficient product management and transactions.",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/fl_preserve_transparency/v1737397470/Screenshot_2025-01-20_232340_kqv6ei.jpg?_s=public-apps",
    tags: ["Next.js", "Express", "MongoDB", "Shopify"],
    link: "https://nextjs-commerce-six-chi.vercel.app/",
  },

  {
    id: 6,
    title: "Naqsh Agency (In Progress)",
    description:
      "This project is a sleek and professional service-based website built for a premium branding and web solutions provider. It showcases services like brand identity, website development, and digital strategy, with a modern UI that reflects the high-end quality of the brand’s offerings.",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744562726/Screenshot_2025-04-13_214330_wvi586.png",
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Express",
      "Firebase",
    ],
    link: "https://nagash-agency.vercel.app/",
  },
  {
    id: 7,
    title: "ASTORAT AL NAWRAS (In Progress)",
    description:
      "This project is a modern auto spare parts e-commerce website building using Next.js. It provides a seamless user experience for browsing, searching, and purchasing high-quality car spare parts.",
    image:
      "https://res.cloudinary.com/dwn3n5zdb/image/upload/v1744561982/Screenshot_2025-04-13_213234_hzrdml.png",
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Express",
      "Firebase",
    ],
    link: "https://auto-parts-ecommerce.vercel.app/",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const showLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h2>
          <div className="mx-auto h-1 w-20 bg-blue-500"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden group-hover:scale-105">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 "></div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(project.link, "_blank")}
                  variant="outline"
                  className="mt-2 w-full  border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  View Project
                </Button>
              </div>

              {/* Animated border */}

              <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-blue-500/0 transition-all duration-300 group-hover:border-blue-500/30"></div>

              {/* Glow effect */}
              <div className="pointer-events-none absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {visibleProjects < projects.length ? (
            <Button
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Load More Projects
            </Button>
          ) : (
            <Button
              onClick={showLess}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
