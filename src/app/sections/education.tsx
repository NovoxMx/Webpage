import csn from '../../../public/images/csn_tec.jpg';
import Image from 'next/image';
import SimpleContainer from '../components/simplecontainer';
import Title from '../components/title';

export default function Education() {
    return (
        <SimpleContainer>
            <Title> Education </Title>
            <div className="flex justify-around mt-10 mb-10">
                <p className="text-lg font-MMomo text-gray-700 text-justify w-4/7">
                    I am a Software Engineering student at the Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) in Hermosillo, Sonora, Mexico. I have been studying here since 2021, and during this time, I have developed a solid foundation in various techniques, such as programming languages, algorithms, data structures, and software development. I am passionate about learning new technologies, particularly in DevSecOps & FrontEnd development. Additionally, I actively participate in extracurricular activities such as programming competitions and hackathons, where I can showcase my skills and collaborate with other students.

                </p>
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
