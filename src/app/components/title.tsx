export default function Title({ children }: { children: string }) {
    return (
        <div className="flex justify-center mt-6">
            <h1 className="text-2xl font-MPMomo text-emerald-500">{children}</h1>
        </div>
    );
}