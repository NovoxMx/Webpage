import AnimationText from "../constants/animationtext";

export default function Decrypted({
    children,
    className = "",
}: {
    children: string;
    className?: string;
}) {
    return (
        <div className={`${className}`}>
            <AnimationText
                text={children}
                animateOn="view"
                revealDirection="center"
                speed={100}
            />
        </div>
    );
}
