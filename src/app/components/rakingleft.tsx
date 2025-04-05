import RakingBar from "../constants/rankingbar";

export default function RakingLeft() {
    return (
        <div className="w-3/4 ml-6 flex flex-col items-end">
            <div className="flex items-center justify-between w-full ml-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">1 year exp.</h6>
                <h3 className="text-lg font-MMomo text-gray-950">Aws</h3>
            </div>
            <RakingBar rank={5} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">3 year exp.</h6>
                <h3 className="text-lg font-MMomo text-gray-950">MySQL</h3>
            </div>
            <RakingBar rank={3} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">1 year exp.</h6>
                <h3 className="text-lg font-MMomo text-gray-950">PHP</h3>
            </div>
            <RakingBar rank={1} position={1} />
        </div>
    );
}
