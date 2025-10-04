"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

interface ModalEducationProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function ModalEducation({
  isOpen,
  onClose,
  title,
  children,
}: ModalEducationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {title}
            </h3>

            {/* Main Content */}
            <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
              {children}
            </div>

            {/* Optional: Add subtle divider at bottom */}
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
