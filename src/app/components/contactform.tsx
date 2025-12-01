import { useState } from "react";
import { useLanguage } from "../context/languageContext";

export default function ContactForm() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [honeypot, setHoneypot] = useState("");

    const { lang } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-spam: si el honeypot tiene texto, cancelar
        if (honeypot.trim() !== "") {
            console.log("Spam bot detected");
            return;
        }

        const mailtoLink = `mailto:angelfidelmg03@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="mb-20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10 w-full max-w-lg mx-auto">

                {/* Honeypot: campo invisible para bots */}
                <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                />

                <input
                    type="text"
                    placeholder={lang === "en" ? "Subject" : "Asunto"}
                    className="p-3 rounded-md border border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white text-black"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

                <textarea
                    placeholder={lang === "en" ? "Message" : "Mensaje"}
                    className="p-3 rounded-md border border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white text-black h-40"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 text-white hover:text-emerald-500 hover:bg-transparent border border-emerald-500 font-semibold rounded-md transition"
                >
                    {lang === "en" ? "Send" : "Enviar"}
                </button>
            </form>
        </div>
    );
}
