export default function Title({ children, className }: { children: string, className?: string }) {
    return (
        <div className="flex justify-center my-6">
            <div className="flex items-center gap-12 w-full max-w-3/4 px-4">
                <div className="flex-1 h-px bg-emerald-500" />
                <h1 className={`text-4xl font-MPMomo text-emerald-500 ${className}`}>{children}</h1>
                <div className="flex-1 h-px bg-emerald-500" />
            </div>
        </div>
    );
}