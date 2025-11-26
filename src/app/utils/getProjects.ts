import data from "../data/projects.json";
import { Projects, ProjectData } from "../data/interfaces";

const projectsData = data as unknown as ProjectData;

export function getProjects(lang: "en" | "es"): Projects[] {
    return projectsData[lang];
}