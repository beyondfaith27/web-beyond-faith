"use client";

import Retractable from "@/components/Retractable";
import { ContactFormProvider } from "@/lib/ContactFormContext";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

function Fallback() {
    return <section className="w-full h-full flex justify-center items-center">
        <Loader2
            className="!h-5 !w-5 animate-spin text-colored-background"
            strokeWidth={4}
        />
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