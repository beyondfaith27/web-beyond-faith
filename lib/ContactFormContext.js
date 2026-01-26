"use client";

import React, { createContext, useContext, useState, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const ContactFormContext = createContext(null);

export function ContactFormProvider({ children }) {
  const [activeInstanceId, setActiveInstanceId] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function openInstance(instanceId) {
    setActiveInstanceId(instanceId);

    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.set("contact-form", "true");
    const newURL = `${pathname}?${params.toString()}`;
    router.push(newURL, { scroll: false });
  }

  function closeInstance() {
    setActiveInstanceId(null);

    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.delete("contact-form");
    const newURL = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newURL, { scroll: false });
  }

  return (
    <ContactFormContext.Provider
      value={{
        activeInstanceId,
        openInstance,
        closeInstance,
        searchParams
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within ContactFormProvider");
  }
  return context;
}