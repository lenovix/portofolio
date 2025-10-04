"use client";

import Image from "next/image";
import { hero } from "@/app/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center px-6">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-purple-100/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Photo with animation */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />
            <Image
              src={hero.photo}
              alt={`${hero.name} photo`}
              width={180}
              height={180}
              className="relative rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800 transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Text Description */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Title / Role */}
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-1 px-3 rounded-full shadow-sm">
              {hero.title}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            {hero.name}
          </h1>

          {/* Tagline / Skills */}
          {hero.tagline && (
            <p className="mt-2 text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
              {hero.tagline}
            </p>
          )}

          {/* Description */}
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Tombol Download CV */}
            <a
              href="/document/CV_Ichsanul Kamil Sudarmi.pdf"
              download
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.03] transition"
            >
              Download CV
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          {hero.socials && (
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              {hero.socials.email && (
                <a
                  href={`mailto:${hero.socials.email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaEnvelope size={20} />
                </a>
              )}
              {hero.socials.linkedin && (
                <a
                  href={hero.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {hero.socials.github && (
                <a
                  href={hero.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
