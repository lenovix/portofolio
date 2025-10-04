import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  skills?: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  skills,
}: ProjectCardProps) {
  return (
    <>
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden cursor-pointer
                 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.03, y: -4 }}
      >
        <div className="relative w-full h-52 md:h-60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </motion.div>

      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
            {description}
          </p>

          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        <Link
          href={link}
          className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg
                     text-center hover:from-blue-600 hover:to-blue-700 transition"
        >
          View Project
        </Link>
      </div>
    </>
  );
}
