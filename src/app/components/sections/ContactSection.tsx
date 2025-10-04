"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { contact } from "@/app/data";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="h-screen w-screen py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle>Contact Me</SectionTitle>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          {contact.message}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email */}
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-xl border border-transparent hover:border-indigo-500/40 transition-all"
          >
            <FaEnvelope className="text-2xl text-indigo-600 dark:text-indigo-400" />
            <span className="text-base font-medium text-gray-800 dark:text-gray-200">
              Email
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={contact.linkedin}
            onClick={(e) => {
              e.preventDefault();
              const start = Date.now();
              // Coba buka LinkedIn app
              window.location.href = "linkedin://in/kamilsudarmi";
              // fallback ke web setelah 500ms
              setTimeout(() => {
                if (Date.now() - start < 1000) {
                  window.open(contact.linkedin, "_blank");
                }
              }, 500);
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-xl border border-transparent hover:border-indigo-500/40 transition-all"
          >
            <FaLinkedin className="text-2xl text-indigo-600 dark:text-indigo-400" />
            <span className="text-base font-medium text-gray-800 dark:text-gray-200">
              LinkedIn
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-xl border border-transparent hover:border-indigo-500/40 transition-all"
          >
            <FaGithub className="text-2xl text-indigo-600 dark:text-indigo-400" />
            <span className="text-base font-medium text-gray-800 dark:text-gray-200">
              Github
            </span>
          </motion.a>
        </div>

        {/* Optional subtle footer text */}
        <motion.p
          className="mt-12 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let’s build something amazing together ✨
        </motion.p>
      </motion.div>
    </section>
  );
}
