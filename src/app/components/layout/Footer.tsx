"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-6 mt-20 border-t border-gray-200 dark:border-gray-700">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            href="mailto:ichsanulkamilsudarmi@gmail.com"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaEnvelope size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ichsanulkamil"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/ichsanulkamil"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {year}{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Ichsanul Kamil Sudarmi
          </span>
          . All rights reserved.
        </p>

        {/* Subtle accent line */}
        <div className="w-16 h-[2px] bg-indigo-500/60 mx-auto mt-4 rounded-full"></div>
      </motion.div>
    </footer>
  );
}
