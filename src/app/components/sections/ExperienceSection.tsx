"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { experience } from "@/app/data";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/app/components/modal/ModalExperience";
import type { Experience as ExperienceType } from "@/app/data";

export default function ExperienceSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedExp: ExperienceType | undefined =
    selected !== null && experience[selected]
      ? experience[selected]
      : undefined;

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Experience</SectionTitle>

        <div className="space-y-8">
          {experience.map((exp, i) => {
            const hasTimeline =
              Array.isArray(exp.timeline) && exp.timeline.length > 0;
            const latestRole = hasTimeline
              ? exp.timeline![exp.timeline!.length - 1]
              : undefined;
            const latestPosition = latestRole?.position ?? exp.position ?? "—";

            return (
              <motion.div
                key={i}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8 cursor-pointer 
                           border border-transparent hover:border-indigo-500/30 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start gap-6"
                onClick={() => setSelected(i)}
                // initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {/* Logo */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="rounded-lg object-contain border border-gray-200 dark:border-gray-700 bg-white p-2 group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Description */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {exp.period}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                    Latest Role:{" "}
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {latestPosition}
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp && (
          <Modal
            isOpen={true}
            onClose={() => setSelected(null)}
            title={selectedExp.company}
          >
            <div className="relative mt-4 space-y-6">
              {Array.isArray(selectedExp.timeline) &&
              selectedExp.timeline.length > 0 ? (
                selectedExp.timeline.map((role, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-200 dark:ring-blue-900" />

                    <p className="text-sm text-gray-500 mb-1">{role.month}</p>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                      {role.position}
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {role.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))
              ) : (
                <div className="space-y-4">
                  {selectedExp.position && (
                    <>
                      <p className="text-sm text-gray-500">
                        {selectedExp.period}
                      </p>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                        {selectedExp.position}
                      </h4>
                    </>
                  )}
                  {Array.isArray(selectedExp.details) &&
                    selectedExp.details.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {selectedExp.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                </div>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
