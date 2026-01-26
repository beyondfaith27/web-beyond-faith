"use client";

import Retractable from "@/components/Retractable";
import { ContactFormProvider } from "@/lib/ContactFormContext";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";

function Fallback() {
    return <section className="w-full h-full flex justify-center items-center">
        Something went wrong
    </section>
}

export default function SiteLayout({ children }) {
    return (
        <Suspense fallback={<Fallback />}>
            <ContactFormProvider>
                <Retractable>
                    <Header />
                </Retractable>
                {children}
                <Footer />
            </ContactFormProvider>
        </Suspense>
    );
}