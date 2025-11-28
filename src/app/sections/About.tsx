import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";
import Descriptor from "../components/descriptor";
import { getAbout } from "../utils/getAbout";
import type { Abouts } from "../data/interfaces"
import { useLanguage } from "../context/languageContext";

export default function About() {
    const { lang } = useLanguage();

    const aboutList: Abouts[] = getAbout(lang);

    return (
        <SimpleContainer className="mt-24">
            <Title>{lang === "en" ? "About Me" : "Sobre Mí"}</Title>
            <div className="flex justify-center mb-6">
                <p className="text-lg font-MMomo text-gray-700 text-justify w-6/7"> {aboutList[0].content} </p>
            </div>

            <div className="flex justify-center gap-4">
                <Descriptor text={aboutList[0].age} />
                <Descriptor text={aboutList[0].from} />
                <Descriptor text={aboutList[0].degree} />
                <Descriptor text={aboutList[0].native_lang} />
                <Descriptor text={aboutList[0].other_lang} onClick={() => window.open('https://certs.duolingo.com/jvcq7bn1k4r7q9m9', '_blank')} />
            </div>

        </SimpleContainer>
    );
}
