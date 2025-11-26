import data from "../data/experience.json";
import { Experiences, ExperienceData } from "../data/interfaces";

const experienceData = data as unknown as ExperienceData;

export function getExperience(lang: "en" | "es"): Experiences[] {
    return experienceData[lang];
}
