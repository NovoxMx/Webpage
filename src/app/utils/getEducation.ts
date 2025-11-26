import data from '../data/education.json';
import { Education, EducationData } from '../data/interfaces';
    
const educationData = data as unknown as EducationData;

export function getEducation(lang: "en" | "es"): Education[] {
    return educationData[lang];
}