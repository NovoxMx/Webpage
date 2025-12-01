"use client";
import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {

    if (!isOpen) return null;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]); 

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md
                 bg-neutral-100/40 dark:bg-neutral-900/60"
            onClick={onClose}
        >
            <div
                className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6 shadow-xl w-full 
                   max-w-2xl animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
