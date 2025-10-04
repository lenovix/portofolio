export interface ExperienceTimeline {
  month: string;
  position: string;
  details: string[];
}

export interface Experience {
  logo: string;
  company: string;
  period: string;
  position?: string;
  details?: string[];
  timeline?: ExperienceTimeline[];
}

export interface Education {
  logo: string;
  institution: string;
  degree: string;
  period: string;
  ipk: number;
  location: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  skills?: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  message: string;
}

export interface Hero {
  name: string;
  title?: string;
  description: string;
  photo: string;
  tagline?: string;
  socials?: {
    email?: string;
    linkedin?: string;
    github?: string;
    [key: string]: string | undefined;
  };
  cta?: {
    label: string;
    link: string;
  };
  animatedText?: string[];
}

export interface About {
  summary: string;
  interests: string[];
}
