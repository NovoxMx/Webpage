import BoxGrid from "../components/boxgrid";

export default function Projects() {
    return (
        <div className="flex items-between justify-center">
            <div className="w-3/4 h-full">
                <BoxGrid>
                    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 col-span-3">
                        <h1 className="text-xl font-MPMomo text-emerald-500 mb-2">SSI Schaefer</h1>
                        <p className="text-gray-700 text-justify w-9/10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4">
                        <h1 className="text-xl font-MPMomo text-emerald-500 mb-2">BAMX</h1>
                        <p className="text-gray-700 text-justify w-9/10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 col-span-2">
                        <h1 className="text-xl font-MPMomo text-emerald-500">Project 3</h1>
                        <h2 className="text-gray-700 text-lg">Description of Project 3</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 col-span-2">
                        <h1 className="text-xl font-MPMomo text-emerald-500">Project 3</h1>
                        <h2 className="text-gray-700 text-lg">Description of Project 3</h2>
                    </div>
                </BoxGrid>
            </div>
        </div>
    );
}