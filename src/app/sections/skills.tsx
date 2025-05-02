import { IconCloudDemo } from "../components/iconcloud";
import Unique from "../components/unique";
import RakingLeft from "../components/rakingleft";
import RankingRight from "../components/rankingright";
import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";

export default function Skills() {
    return (
        <SimpleContainer>
            <Title>Skills</Title>
            <div className="flex mt-4 justify-center items-center">
                <div className="w-1/4">
                    <Unique
                        texts={["typescript",
                            "javascript",
                            "react",
                            "html",
                            "css",
                            "next.js",
                            "node.js",
                            "tailwindcss",
                            "vercel",
                            "aws",
                            "docker",
                            "git",
                            "github",
                            "MySQL",
                            "MongoDB",
                            "php",
                            "python",
                            "c++",
                            "Angular",
                            "bootstrap",
                            "figma",]}
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