export default function Title({ children }: { children: string }) {
    return (
        <div className="flex justify-center mt-6">
            <div className="flex items-center gap-4 w-full max-w-3xl px-4">
                <span className="flex-1 h-px bg-emerald-500" />
                <h1 className="text-2xl font-MPMomo text-emerald-500">{children}</h1>
                <span className="flex-1 h-px bg-emerald-500" />
            </div>
        </div>
    );
}