export default function Navbar() {
    return (
        <div className="flex justify-center mb-20">
            <div
                className=" fixed top-0 w-3/4 z-10 mt-6 transition-colors rounded-sm duration-300 bg-black text-white shadow-black shadow-lg"
            >
                <div className="flex justify-between rounded-sm h-12 items-center">
                    <div className="flex ml-6">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 140 160"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-colors duration-300"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                        >
                            <path d="M16.0182 7.04321V1.04858H27.7958L112.598 120.124V10.8731L109.601 7.04321H97.9447V1.04858H138.242V7.04321H125.753L123.255 10.8731V141.09H118.528L21.6798 7.04321H16.0182Z" />
                            <path d="M123.257 152.052V158.046H111.48L26.6771 38.9705V148.222L29.6744 152.052H41.3307V158.046H1.03345V152.052H13.5223L16.02 148.222V18.0051H20.7473L117.596 152.052H123.257Z" />
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-2xl font-MPMomo text-emerald-500">Angel Marin</h1>
                    </div>
                    <div className="flex justify-around w-1/3 font-MMomo">
                        <a href="#" className="text-lg font-semibold">About</a>
                        <a href="#" className="text-lg font-semibold">Projects</a>
                        <a href="#" className="text-lg font-semibold">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
