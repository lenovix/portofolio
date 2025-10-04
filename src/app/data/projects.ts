import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Kamil Connect",
    description:
      "A lightweight cross-platform broadcast app built with Rust and WebSocket for real-time communication.",
    image: "/kamil-connect.jpg",
    // link: "/kamil-connect",
    link: "https://github.com/lenovix/kamil_connect",
    skills: ["Rust", "WebSocket", "Cross-Platform", "Real-time Communication"],
  },
  {
    title: "Kamil Comic",
    description:
      "A personal comic and manga archive platform with metadata management and responsive gallery interface.",
    image: "/kamilcomic-thumbnail.jpg",
    // link: "/kamilcomic",
    link: "https://github.com/lenovix/kamilcomic",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "JSON Metadata",
    ],
  },
];
