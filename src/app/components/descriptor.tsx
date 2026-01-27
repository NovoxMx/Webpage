export default function Descriptor({ text, onClick }: { text: string; onClick?: () => void }) {
    const baseClasses = "rounded-lg mt-2 w-2/12 font-MMomo flex items-center justify-center mb-4";
    const staticClasses = "border border-emerald-500 bg-none";
    const clickableClasses = "border border-emerald-500 bg-none hover:bg-emerald-500 cursor-pointer transition ";
    const textClasses = "text-lg text-center text-emerald-500 h-full w-full flex items-center justify-center mx-2";

    return onClick ? (
        <button type="button" onClick={onClick} className={`${baseClasses} ${clickableClasses}`}>
            <p className={`${textClasses} hover:text-white `}>{text}</p>
        </button>
    ) : (
        <div className={`${baseClasses} ${staticClasses}`}>
            <p className={textClasses}>{text}</p>
        </div>
    );
}