import Image from "next/image";

export default function SkillBadge({
    children,
    className,
    inc,
    color
}: {
    children: React.ReactNode,
    className?: string,
    inc: string,
    color?: string
}) {
    
    const borderColor = color || "#34d399"; // fallback: emerald-300
    const shadowColor = color ? `${color}40` : "rgba(16,185,129,0.25)"; // 40 = 25% opacity

    return (
        <div className="flex items-center">
            <div className="w-34 h-full">
                <div
                    className={`flex flex-row items-center justify-center mt-6 p-1 gap-2 bg-transparent rounded-sm text-black font-MMomo text-sm dark:text-white ${className}`}
                    style={{
                        border: `2px solid ${borderColor}`,
                        boxShadow: `0 0 10px ${shadowColor}`
                    }}
                >
                    {children}

                    <Image
                        src={`https://cdn.simpleicons.org/${inc}/${color ? color.replace("#", "") : inc}`}
                        alt={`${inc} icon`}
                        width={20}
                        height={20}
                        className="inline-block"
                    />
                </div>
            </div>
        </div>
    );
}
