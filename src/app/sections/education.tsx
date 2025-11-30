import csn from "../../../public/images/csn_tec.jpg";
import Image from "next/image";
import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";
import { getEducation } from "../utils/getEducation";
import type { Education } from "../data/interfaces";
import { useLanguage } from "../context/languageContext";

export default function Education() {
    const { lang } = useLanguage();

    const eduList: Education[] = getEducation(lang);

    return (
        <SimpleContainer>
            <Title>{lang === "en" ? "Education" : "Educación"}</Title>

            <div className="flex justify-around mt-10 mb-10">
                <p className="text-lg font-MMomo text-gray-700 text-justify w-4/7 dark:text-white"> {eduList[0].content} </p>
                <Image
                    src={csn}
                    alt="CSN"
                    className="rounded-lg shadow-lg w-2/7 "
                    width={300}
                    height={300}
                    priority
                />
            </div>
        </SimpleContainer>
    )
}
