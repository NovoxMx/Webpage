"use client";
import Title from "../components/title";
import { useLanguage } from "../context/languageContext";
import ContactForm from "../components/contactform";

export default function Contact() {

    const { lang } = useLanguage();

    return (
        <div className="mb-20">
            <Title>{lang === "en" ? "Contact Me" : "Contáctame"}</Title>
            <ContactForm />
        </div>
    );
}
