import SimpleContainer from "../components/simplecontainer";
import Title from "../components/title";

export default function About() {
    return (
        <SimpleContainer>
            <Title>About Me</Title>
            <div className="flex justify-center mt-10 mb-10">
                <p className="text-lg font-MMomo text-gray-700 text-justify w-6/7">
                    Software Developer focused on supporting the creation and renewal of systems, applications, and websites, delivering impactful and positive results for both the company and the user. My personal focus is on Front-End development and UX/UI design centered on the user experience. Excited to take on new dynamic challenges and apply my knowledge to them.
                </p>
            </div>
        </SimpleContainer>
    );
}
