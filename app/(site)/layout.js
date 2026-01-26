"use client";

import Retractable from "@/components/Retractable";
import { ContactFormProvider } from "@/lib/ContactFormContext";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout({ children }) {
    return (
        <ContactFormProvider>
            <Retractable>
                <Header />
            </Retractable>
            {children}
            <Footer />
        </ContactFormProvider>
    );
}