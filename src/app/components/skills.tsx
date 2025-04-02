import { IconCloudDemo } from "./iconcloud";
import Unique from "./unique";

export default function Skills() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-3/4 h-full">
                <div className="flex flex-col mt-6 bg-white rounded-sm h-4/6">
                    <div className="flex justify-center mt-6">
                        <h1 className="text-2xl font-MPMomo text-emerald-500">Skills</h1>
                    </div>
                    <div className="flex mt-4 justify-center items-center" >
                        <div >
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
                                mainClassName="px-2 sm:px-2 md:px-3 bg-emerald-500 font-MPMomo text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-sm justify-center"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                            <IconCloudDemo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}