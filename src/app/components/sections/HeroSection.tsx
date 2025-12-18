"use client";

import Image from "next/image";
import { hero } from "@/app/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center
                 bg-gradient-to-br
                 from-gray-50 via-white to-gray-100
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-purple-100/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT : TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Badge */}
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full
                           bg-gradient-to-r from-blue-600 to-purple-600
                           text-white text-sm font-semibold shadow"
          >
            {hero.title}
          </span>

          {/* Name */}
          <h1
            className="text-4xl md:text-5xl xl:text-6xl
                         font-extrabold tracking-tight leading-tight"
          >
            {hero.name}
          </h1>

          {/* Tagline */}
          {hero.tagline && (
            <p
              className="mt-3 text-blue-600 dark:text-blue-400
                          font-medium text-base md:text-lg"
            >
              {hero.tagline}
            </p>
          )}

          {/* Description */}
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            {hero.description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/document/CV_Ichsanul Kamil Sudarmi.pdf"
              download
              className="px-6 py-3 rounded-xl
                         bg-gradient-to-r from-purple-500 to-blue-500
                         text-white font-semibold shadow-lg
                         hover:shadow-xl hover:scale-[1.03] transition"
            >
              Download CV
            </a>

            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl
                         border border-gray-300 dark:border-gray-700
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         transition font-medium"
            >
              Contact Me
            </Link>
          </div>

          {/* Socials */}
          {hero.socials && (
            <div className="mt-8 flex gap-5 justify-center md:justify-start">
              {hero.socials.email && (
                <a
                  href={`mailto:${hero.socials.email}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaEnvelope size={22} />
                </a>
              )}
              {hero.socials.linkedin && (
                <a
                  href={hero.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaLinkedin size={22} />
                </a>
              )}
              {hero.socials.github && (
                <a
                  href={hero.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaGithub size={22} />
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* ================= RIGHT : PHOTO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full
                         bg-gradient-to-tr from-blue-400 to-purple-400
                         blur-xl opacity-50
                         group-hover:opacity-80 transition"
            />
            <Image
              src={hero.photo}
              alt={`${hero.name} photo`}
              width={220}
              height={220}
              className="relative rounded-full
                         ring-4 ring-white dark:ring-gray-800
                         shadow-xl
                         transform group-hover:scale-105 transition"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
