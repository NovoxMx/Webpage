export default function SimpleContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center">
            <div className="w-3/4 h-full">
                <div className="flex flex-col mt-6 bg-white rounded-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}