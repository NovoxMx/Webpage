import Novox from "@/app/components/novox";

export default function Navbar() {
    return (
        <div className="flex justify-center mb-20">
            <div
                className=" fixed top-0 w-3/4 z-10 mt-6 transition-colors rounded-sm duration-300 bg-black text-white shadow-black shadow-lg"
            >
                <div className="flex justify-between rounded-sm h-12 items-center">
                    <div className="flex ml-6">
                        <Novox />
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-2xl font-MPMomo text-emerald-500">Angel Marin</h1>
                    </div>
                    <div className="flex justify-around w-1/3 font-MMomo">
                        <a href="#about" className="text-lg font-semibold">About</a>
                        <a href="#projects" className="text-lg font-semibold">Projects</a>
                        <a href="#contact" className="text-lg font-semibold">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
