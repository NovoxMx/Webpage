import data from "../data/about.json";
import { Abouts, AboutData } from "../data/interfaces";
 
const aboutsData = data as unknown as AboutData;

export function getAbout(lang: "en" | "es"): Abouts[] {
    return aboutsData[lang];
}