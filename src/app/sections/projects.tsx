import BoxGrid from "../components/boxgrid";
import PixelTransition from "../components/pixeltransition";
import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";
import { getProjects } from "../utils/getProjects";
import type { Projects } from "../data/interfaces";
import { useLanguage } from "../context/languageContext";
import SkillBadge from "../components/skillsbadge";

export default function Projects() {
    const { lang } = useLanguage();

    const projectList: Projects[] = getProjects(lang);

    return (
        <SimpleContainer>
            <Title>{lang === "en" ? "Projects" : "Proyectos"}</Title>

            <div className="flex items-between justify-center mb-2">
                <div className="w-full h-full mx-2">

                    <BoxGrid>
                        {projectList.map((project, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center bg-neutral-200 rounded-lg shadow-md p-4 h-150 dark:bg-neutral-800
                                    ${index === 0 ? "col-span-3" : ""}
                                    ${index === 2 || index === 3 ? "col-span-2" : ""}
                                `}
                            >
                                <h1 className="text-xl font-MPMomo text-emerald-500 mb-2">
                                    {project.title}
                                </h1>

                                <PixelTransition
                                    firstContent={
                                        <div className="w-full h-full overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.alt}
                                                className="w-full h-full object-cover object-center rounded-md"
                                            />
                                        </div>
                                    }
                                    secondContent={
                                        <>
                                            {/* Lógica para tamaño */}
                                            {(() => {
                                                const isLarge = index === 0 || index === 2 || index === 3;

                                                return (
                                                    <>
                                                        {/* Skill Badges */}
                                                        <div className={`flex flex-wrap gap-2 ${isLarge ? "ml-6" : "ml-0"}`}>
                                                            {project.skills.map(([name, color]) => (
                                                                <SkillBadge key={name} inc={name} color={color}>
                                                                    {name}
                                                                </SkillBadge>
                                                            ))
                                                            }
                                                        </div>

                                                        {/* Start - End - Year */}
                                                        <p className={`text-sm text-natural-900 mt-4 ${isLarge ? "ml-6" : "ml-2"}`}>
                                                            {project.start} – {project.end} {project.year}
                                                        </p>

                                                        {/* Description */}
                                                        <div
                                                            className={`list-disc text-justify text-base         mbp:text-xs      fhd:text-lg ${isLarge ? "mt-6 mx-6" : "mt-2"}
  `}
                                                        >
                                                            {project.description.split("\n").map((line, i) => (
                                                                <ul key={i}>{line}</ul>
                                                            ))}
                                                        </div>

                                                    </>
                                                );
                                            })()}
                                        </>
                                    }


                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                    </BoxGrid>

                </div>
            </div>
        </SimpleContainer>
    );
}
