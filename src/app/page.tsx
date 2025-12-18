"use client";

import Link from "next/link";

import HeroSection from "@/app/components/sections/HeroSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import EducationSection from "@/app/components/sections/EducationSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ContactSection from "@/app/components/sections/ContactSection";
import Sidebar from "@/app/components/layout/Sidebar";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      <Sidebar />

      {/* Other Links */}
      <section
        id="otherLink"
        className="mx-auto px-3 py-3 justify-center bg-white dark:bg-gray-900 text-center"
      >
        <Link
          href="/other-link/holiday-calendar"
          className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white font-semibold
            shadow-lg
            hover:opacity-90 hover:shadow-xl
            transition
          "
        >
          📅 Holiday Calendar
        </Link>
      </section>

      {/* Hero */}
      <section id="hero" className="flex items-center">
        <HeroSection />
      </section>

      {/* Experience + Education */}
      <section
        id="experience-education"
        className="lg:h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="flex flex-col justify-center">
            <ExperienceSection />
          </div>

          <div className="flex flex-col justify-center">
            <EducationSection />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="flex items-center">
        <ProjectsSection />
      </section>

      {/* Contact */}
      <section className="h-screen flex items-center">
        <ContactSection />
      </section>
    </main>
  );
}
