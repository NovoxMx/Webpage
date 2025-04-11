import RakingBar from "../constants/rankingbar";
import Decrypted from "./decrypted";

export default function RakingLeft() {
    return (
        <div className="w-3/4 ml-6 flex flex-col items-end">
            <div className="flex items-center justify-between w-full ml-4">
                <Decrypted className="font-MMomo text-gray-950 text-sm"> 1 year exp. </Decrypted>
                <Decrypted className="font-MMomo text-gray-950 text-md"> AWS </Decrypted>
            </div>
            <RakingBar rank={3} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-sm"> 3 year exp. </Decrypted>
                <Decrypted className="font-MMomo text-gray-950 text-md"> MySQL </Decrypted>
            </div>
            <RakingBar rank={3} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-sm"> 3 year exp. </Decrypted>
                <Decrypted className="font-MMomo text-gray-950 text-md"> PHP </Decrypted>
            </div>
            <RakingBar rank={1} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-sm"> 4 year exp. </Decrypted>
                <Decrypted className="font-MMomo text-gray-950 text-md"> Python </Decrypted>
            </div>
            <RakingBar rank={4} position={1} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-sm"> 4 year exp.</Decrypted>
                <Decrypted className="font-MMomo text-gray-950 text-md"> C++ </Decrypted>
            </div>
            <RakingBar rank={4} position={1} />
        </div>
    );
}
