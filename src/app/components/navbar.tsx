import Novox from "./Novox";
export default function Navbar() {
    return (
        <div className="flex items-center justify-center">
            <div className="container w-3/4 ">
                <div className="flex justify-between bg-white mt-6 rounded-sm h-12 items-center">
                    <div className="flex ml-6">
                        <Novox />
                    </div>
                    <div className="flex items-center">

                        <h1 className="text-2xl items-center font-bold"> Angel Marin</h1>
                    </div>
                    <div className="flex justify-around w-1/3 ">
                        <a href="#about" className="text-lg font-semibold">About</a>
                        <a href="#projects" className="text-lg font-semibold">Projects</a>
                        <a href="#contact" className="text-lg font-semibold">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}