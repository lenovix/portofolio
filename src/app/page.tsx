"use client"

import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
// import CertificateViewer from '../components/CertificateViewer'

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-gray-100 p-8 text-center shadow-md">
        <Image
          src="/profile-photo.jpg"
          alt="Profile Photo"
          width={120}
          height={120}
          className="rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">Ichsanul Kamil Sudarmi</h1>
        <p className="text-gray-600">Software Engineer</p>
      </header>

      {/* Experience */}
      <section className="bg-gray-50 p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="flex items-center gap-4">
          <Image
            src="/lgsinarmas_logo.jpeg"
            alt="Sinarmas"
            width={60}
            height={60}
          />
          <div>
            <h3 className="font-medium">PT LG Sinarmas</h3>
            <p className="text-sm text-gray-600">.NET/Java Developer (2024 - Present)</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="flex items-center gap-4">
          <Image
            src="/President_University_Logo.png"
            alt="President University"
            width={60}
            height={60}
          />
          <div>
            <h3 className="font-medium">President University</h3>
            <p className="text-sm text-gray-600">B.Sc.IT / S.Kom  - 2019 s/d 2023</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {/* <li>Website Reservasi Restoran dengan Chatbot WhatsApp</li> */}
          <li>kamilBrowser</li>
          <li>3D Character Viewer Website (Babylon.js)</li>
        </ul>
      </section>

      {/* Certificate */}
      {/* <section className="bg-gray-50 dark:bg-gray-800 p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Certificate</h2>
        <CertificateViewer />
      </section> */}

      {/* Contact Me */}
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <FaEnvelope className="text-xl text-gray-600 dark:text-gray-300" />
            <a href="mailto:ichkmlsdr@gmail.com" className="hover:underline">ichkmlsdr@gmail.com</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaLinkedin className="text-xl text-blue-600" />
            <a href="https://linkedin.com/in/kamilsudarmi" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/kamilsudarmi
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <FaGithub className="text-xl" />
            <a href="https://github.com/lenovix" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/lenovix
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; 2025 - {new Date().getFullYear()} Ichsanul Kamil Sudarmi. All rights reserved.
      </footer>
    </main>
  );
}