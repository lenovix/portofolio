"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { education } from "@/app/data";
import { motion } from "framer-motion";
import ModalEducation from "@/app/components/modal/ModalEducation"; // modal baru
import type { Education } from "@/app/data";

export default function EducationSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedEdu: Education | undefined =
    selected !== null && education[selected] ? education[selected] : undefined;

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Education</SectionTitle>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8 cursor-pointer 
                           border border-transparent hover:border-indigo-500/30 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start gap-6"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  fill
                  className="rounded-lg object-contain border border-gray-200 dark:border-gray-700 bg-white p-2 group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400 italic">
                  <span>{edu.period}</span>
                  {edu.ipk && <span>IPK: {edu.ipk}</span>}
                  {edu.location && <span>📍 {edu.location}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEdu && (
        <ModalEducation
          isOpen={true}
          onClose={() => setSelected(null)}
          title={selectedEdu.institution}
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {selectedEdu.degree}
          </h4>
          <p className="text-sm text-gray-500">{selectedEdu.period}</p>
          {selectedEdu.location && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📍 {selectedEdu.location}
            </p>
          )}
          {selectedEdu.ipk && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              IPK: {selectedEdu.ipk}
            </p>
          )}

          {selectedEdu.details.length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mt-4">
              {selectedEdu.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          )}
        </ModalEducation>
      )}
    </section>
  );
}
