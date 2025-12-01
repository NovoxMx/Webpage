import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";
import Image from "next/image";
import { getExperience } from "../utils/getExperience";
import type { Experiences } from "../data/interfaces";
import { useLanguage } from "../context/languageContext";

export default function Experience() {
    const { lang } = useLanguage();

    const expList: Experiences[] = getExperience(lang);

    return (
        <SimpleContainer className="mb-10">
            <Title>{lang === "en" ? "Work Experience" : "Experiencia Laboral"}</Title>

            <div className="mx-auto mt-12 space-y-10 w-3/4 mb-6 ">
                {expList.map((post, index) => (
                    <div key={post.id} className="relative flex gap-4">

                        {index !== expList.length - 1 && (
                            <div className="absolute left-5.5 top-15 -bottom-22 w-[2.5px] bg-gray-300 z-1" />
                        )}

                        {/* Avatar */}
                        <div className="flex items-center z-2">
                            <div className="w-12 h-12 rounded-md overflow-hidden border border-gray-300 shadow-sm">
                                <Image
                                    src={post.image || "/images/default-avatar.png"}
                                    alt="Avatar"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        </div>

                        <div className="flex-1 bg-neutral-200 dark:bg-neutral-800 shadow-md rounded-xl p-5">
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                        {post.title}
                                    </h2>

                                    <span className="text-sm text-gray-500 mt-1">
                                        {post.Init_date} - {post.Fin_date}
                                    </span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                                    {post.content}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </SimpleContainer>
    );
}
