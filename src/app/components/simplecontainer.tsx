export default function SimpleContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className="flex items-center justify-center">
            <div className="w-3/4 h-full">
                <div className={`flex flex-col mt-6 bg-white rounded-sm ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}