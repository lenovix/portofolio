"use client";

import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/profile-photo.jpg"
              alt="Profile Photo"
              width={160}
              height={160}
              className="rounded-full shadow-lg ring-4 ring-white"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Ichsanul Kamil Sudarmi
            </h1>
            <p className="text-xl mt-3 text-gray-700 dark:text-gray-300 max-w-xl">
              Full-stack Software Engineer crafting clean, efficient, and
              impactful solutions.
            </p>
            <p className="mt-4 text-md text-gray-600 dark:text-gray-400 max-w-xl">
              I thrive on solving complex problems and delivering meaningful
              user experiences through thoughtful design and scalable code.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center border-b pb-4 tracking-tight">
            Experience
          </h2>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col md:flex-row gap-6">
            <div className="w-20 h-20 relative">
              <Image
                src="/lgsinarmas_logo.jpeg"
                alt="LG Sinarmas"
                fill
                className="rounded-md border object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">LG Sinarmas</h3>
              <p className="text-sm text-gray-500 mt-1">
                .NET / Java Developer{" "}
                <span className="italic">(2024 – Present)</span>
              </p>
              <ul className="list-disc mt-4 ml-5 space-y-2 text-gray-700 text-[15px]">
                <li>
                  Developed and maintained internal systems using .NET Core and
                  Spring Boot
                </li>
                <li>
                  Collaborated with cross-functional teams to improve
                  performance and scalability
                </li>
                <li>Contributed to the automation of key business processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center border-b pb-4 tracking-tight">
            Education
          </h2>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col md:flex-row gap-6">
            <div className="w-20 h-20 relative">
              <Image
                src="/President_University_Logo.png"
                alt="President University"
                fill
                className="rounded-md border"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">President University</h3>
              <p className="text-sm text-gray-500 mt-1">
                Bachelor of Science in Information Technology (B.Sc.IT / S.Kom)
              </p>
              <p className="text-sm text-gray-500">2019 – 2023</p>
              <ul className="list-disc mt-4 ml-5 space-y-2 text-gray-700 text-[15px]">
                <li>
                  Graduated with strong academic performance and project
                  leadership
                </li>
                <li>
                  Specialized in software engineering, databases, and web
                  technologies
                </li>
                <li>
                  Final project:{" "}
                  <i>EMERGENCY UNIT PREDICTION USING NAÏVE BAYES ALGORITHM</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 border-b pb-4 tracking-tight">
            Contact Me
          </h2>

          <p className="text-md text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out via email or connect on LinkedIn and GitHub.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:ichkmlsdr@gmail.com"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaEnvelope className="text-xl" />
              <span className="text-lg">ichkmlsdr@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/kamilsudarmi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-xl" />
              <span className="text-lg">linkedin.com/in/kamilsudarmi</span>
            </a>

            <a
              href="https://github.com/lenovix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaGithub className="text-xl" />
              <span className="text-lg">github.com/lenovix</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
