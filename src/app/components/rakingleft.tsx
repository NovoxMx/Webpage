import RakingBar from "../constants/rankingbar";
import Decrypted from "./decrypted";

export default function RakingLeft() {
    return (
        <div className="w-3/4 ml-6 flex flex-col items-end">
            <div className="flex items-center justify-between w-full ml-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">1 year exp.</h6>
                <Decrypted> AWS </Decrypted>
            </div>
            <RakingBar rank={3} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">3 year exp.</h6>
                <Decrypted> MySQL </Decrypted>
            </div>
            <RakingBar rank={3} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">1 year exp.</h6>
                <Decrypted> PHP </Decrypted>
            </div>
            <RakingBar rank={1} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">4 year exp.</h6>
                <Decrypted> Python </Decrypted>
            </div>
            <RakingBar rank={4} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <h6 className="text-sm font-MMomo text-gray-950 ml-20">4 year exp.</h6>
                <Decrypted> C++ </Decrypted>
                </div>
            <RakingBar rank={4} position={1} />
        </div>
    );
}
