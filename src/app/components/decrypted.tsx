import AnimationText from "../constants/animationtext";

export default function Decrypted({ children }: { children: string }) {
    return (
        <div className="font-MMomo text-gray-950 text-lg">
            <AnimationText
                text={children}
                animateOn="view"
                revealDirection="center"
                speed={100}
            />
        </div>
    );
}
