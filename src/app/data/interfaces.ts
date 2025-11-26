// Interfaces About
export interface Abouts{
    content: string;
    age: string;
    from: string;
    degree: string;
    native_lang: string;
    other_lang: string;
}

export interface AboutData{
    en: Abouts[];
    es: Abouts[];
}

// Interfaces Certifacates
export interface Certificate {
  src: string;
  alt: string;
  href: string;
}

export interface CertificatesData {
  certificates: Certificate[];
}


// Interface Education
export interface Education {
  content: string;
}
export interface EducationData {
  en: Education[];
  es: Education[];
}

// Interfaces Experiences
export interface Experiences{
    id: string;
    title: string;
    Init_date: string;
    Fin_date: string;
    content: string;
    image: string; 
}

export interface ExperienceData {
    en: Experiences[];
    es: Experiences[];
}

// Interface Navbar
export interface Navbar {
    content1: string;
    content2: string;
    content3: string;
    CV: string;
}

export interface NavbarData {
    en: Navbar[];
    es: Navbar[];
}


// Interfaces Projects
export interface Projects {
  title: string;
  image: string;
  alt: string;
  description: string;
  skills: string[];
  start: string;
  end: string;
  year: number;
}

export interface ProjectData {
  en: Projects[];
  es: Projects[];
}
