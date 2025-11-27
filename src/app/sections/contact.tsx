"use client";
import { useState } from "react";
import Title from "../components/title";

export default function ContactForm() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [honeypot, setHoneypot] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 🚨 Anti-spam: si el honeypot tiene texto, cancelar
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
        <div>
            <Title>Contact Me</Title>
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
                    placeholder="Subject"
                    className="p-3 rounded-md border border-neutral-600 bg-neutral-900 text-white"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Message"
                    className="p-3 rounded-md border border-neutral-600 bg-neutral-900 text-white h-40"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-md transition"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
