import { IconCloudDemo } from "../components/iconcloud";
import Unique from "../components/unique";
import RakingLeft from "../components/rakingleft";
import RankingRight from "../components/rankingright";
import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";
import { useLanguage } from "../context/languageContext";

export default function Skills() {
    const { lang } = useLanguage();

    return (
        <SimpleContainer>
            <Title>{lang === "en" ? "Tech Stack" : "Habilidades"}</Title>
            <div className="flex mt-4 justify-center items-center">
                <div className="w-1/4">
                    <Unique
                        texts={["Typescript",
                            "Javascript",
                            "React",
                            "Html",
                            "CSS",
                            "Next.js",
                            "Node.js",
                            "Tailwindcss",
                            "Vercel",
                            "AWS",
                            "Docker",
                            "Git",
                            "Github",
                            "MySQL",
                            "MongoDB",
                            "Php",
                            "Python",
                            "C++",
                            "Angular",
                            "Bootstrap",
                            "Figma",]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-emerald-500 font-MPMomo text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-sm justify-center "
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-4">
                <RakingLeft />
                <IconCloudDemo />
                <RankingRight />
            </div>
        </SimpleContainer>
    );
}