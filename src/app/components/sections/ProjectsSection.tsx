"use client";

import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { projects } from "@/app/data";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 lg:h-screen w-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Projects</SectionTitle>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl 
                         border border-transparent hover:border-indigo-500/30 
                         transition-all duration-300 overflow-hidden"
            >
              {/* Project Card Wrapper */}
              <div className="h-full flex flex-col">
                <ProjectCard {...project} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
