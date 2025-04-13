import csn from '../../../public/images/csn_tec.jpg';
import Image from 'next/image';

export default function Education() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-3/4 h-full">
                <div className="flex flex-col mt-6 bg-white rounded-sm">
                    <div className="flex justify-center mt-6">
                        <h1 className="text-2xl font-MPMomo text-emerald-500"> Education </h1>
                    </div>
                    <div className="flex justify-around mt-10 mb-10">
                        <p className="text-lg font-MMomo text-gray-700 text-justify w-4/7">
                        I am a Software Engineering student at Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) in Hermosillo, Sonora, Mexico. I have been studying here since 2021, and during this time, I have built a strong foundation in various programming languages, algorithms, data structures, and software development.

                        I am passionate about learning new technologies, particularly in DevSecOps. Additionally, I actively participate in extracurricular activities such as coding competitions and hackathons, where I can demonstrate my skills and collaborate with other students.
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
                </div>
            </div>
        </div>
    )
}
