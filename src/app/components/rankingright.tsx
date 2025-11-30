import RakingBar from "../constants/rankingbar";
import Decrypted from "./decrypted";

export default function RankingRight() {
    return (

        <div className="w-3/4 mr-6 flex flex-col justify-items-start">
            <div className="flex items-center justify-between w-full mr-4">
                <Decrypted className="font-MMomo text-gray-950 text-md dark:text-white"> React </Decrypted>
                <Decrypted className="text-sm font-MMomo text-gray-950 mr-10 dark:text-white"> 3 year exp. </Decrypted>
            </div>
            <RakingBar rank={5} position={2} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-md dark:text-white"> Next </Decrypted>
                <Decrypted className="text-sm font-MMomo text-gray-950 mr-10 dark:text-white"> 2 year exp. </Decrypted>
            </div>
            <RakingBar rank={4} position={2} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-md dark:text-white"> Figma </Decrypted>
                <Decrypted className="text-sm font-MMomo text-gray-950 mr-10 dark:text-white"> 3 year exp. </Decrypted>
            </div>
            <RakingBar rank={4} position={2} />
            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-md dark:text-white"> TypeScript </Decrypted>
                <Decrypted className="text-sm font-MMomo text-gray-950 mr-10 dark:text-white"> 3 year exp.</Decrypted>
            </div>
            <RakingBar rank={4} position={2} />

            <div className="flex items-center justify-between w-full mt-4">
                <Decrypted className="font-MMomo text-gray-950 text-md dark:text-white"> Tailwind </Decrypted>
                <Decrypted className="text-sm font-MMomo text-gray-950 mr-10 dark:text-white"> 2 year exp.</Decrypted>
            </div>
            <RakingBar rank={4} position={2} />
        </div>
    );
}
