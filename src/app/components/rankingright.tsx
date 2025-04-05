import RakingBar from "../constants/rankingbar";

export default function RankingRight() {
    return (

        <div className="w-3/4 mr-6 flex flex-col justify-items-start">
            <div className="flex items-center justify-between w-full mr-4">
                <h3 className="text-lg font-MMomo text-gray-950">Aws</h3>
                <h6 className="text-sm font-MMomo text-gray-950 mr-20">1 year exp.</h6>
            </div>
            <RakingBar rank={5} position={2} />

            <div className="flex items-center justify-between w-full mt-4">
                <h3 className="text-lg font-MMomo text-gray-950">MySQL</h3>
                <h6 className="text-sm font-MMomo text-gray-950 mr-20">3 year exp.</h6>
            </div>
            <RakingBar rank={3} position={2} />

            <div className="flex items-center justify-between w-full mt-4">
                <h3 className="text-lg font-MMomo text-gray-950">PHP</h3>
                <h6 className="text-sm font-MMomo text-gray-950 mr-20">1 year exp.</h6>
            </div>
            <RakingBar rank={1} position={2} />
        </div>
    );
}
