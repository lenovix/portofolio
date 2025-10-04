"use client";

import { useEffect, useState } from "react";
import { FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const sections = [
  { id: "hero", icon: <FaUser size={18} />, label: "About" },
  {
    id: "experience-education",
    icon: <FaBriefcase size={18} />,
    label: "Experience & Education",
  },
  { id: "projects", icon: <FaFolderOpen size={18} />, label: "Projects" },
  { id: "contact", icon: <FaEnvelope size={18} />, label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(sec.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-4 z-50 flex-col gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg p-2 shadow-md
      "
      >
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`w-10 h-10 flex items-center justify-center rounded-md transition ${
              active === sec.id
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-blue-500/20"
            }`}
            title={sec.label}
          >
            {sec.icon}
          </a>
        ))}
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden fixed bottom-4 right-4 z-50 flex flex-row gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-2 shadow-md">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition ${
              active === sec.id
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-blue-500/20"
            }`}
            title={sec.label}
          >
            {sec.icon}
          </a>
        ))}
      </div>
    </>
  );
}
