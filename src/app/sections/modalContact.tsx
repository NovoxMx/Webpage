"use client";
import Modal from "../components/modal";
import ContactForm from "../components/contactform";
import { useLanguage } from "../context/languageContext";
import Title from "../components/title";

interface ModalContactProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalContact({ isOpen, onClose }: ModalContactProps) {
    const { lang } = useLanguage();

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                <Title>{lang === "en" ? "Contact Me" : "Contáctame"}</Title>
                <ContactForm />
            </div>
        </Modal>
    );
}
