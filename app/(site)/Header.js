"use client";

import { Button } from "@/components/ui/button";
import ContactFormSheet from "@/components/ContactFormSheet";
import { cj } from "@/lib/utils";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

// Pages whose top section has a light background — header must start dark
const LIGHT_HERO_PATHS = ["/faq", "/privacy-policy", "/terms-and-conditions"];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  // On light-hero pages the header is always in "scrolled" (dark) mode
  const isDark = scrolled || LIGHT_HERO_PATHS.some((p) => pathname.startsWith(p));

  return (
    <header
      className={cj(
        "w-full h-20 flex items-center justify-between px-[var(--gutter-width)] transition-all duration-300",
        isDark
          ? "bg-background shadow-sm text-foreground"
          : "bg-transparent text-accent"
      )}
    >
      {/* Logo */}
      <Link href="/#home" className="w-5/6 tablet:w-1/3">
        <Image
          src={
            isDark
              ? "/images/beyondFaith-logo-black.svg"
              : "/images/beyondFaith-logo-white.svg"
          }
          height={40}
          width={160}
          alt="beyondFaith-logo"
          className="translate-y-1"
          style={{ width: "auto", height: "40px" }}
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden tablet:flex items-center gap-x-10 font-inter text-sm w-1/3 justify-center">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="hover:opacity-60 transition-opacity"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="w-1/3 hidden tablet:flex justify-end">
        <ContactFormSheet>
          <Button
            variant={isDark ? "default" : "outline"}
            shape="curved-box"
            className="text-sm"
          >
            Talk to Us
          </Button>
        </ContactFormSheet>
      </div>

      {/* Mobile menu */}
      <div className="w-fit tablet:hidden flex justify-end">
        <Sheet>
          <SheetTrigger>
            <Menu size="28px" />
          </SheetTrigger>
          <SheetContent className="!w-full !max-w-56">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="pt-28 px-6 flex flex-col gap-y-10 [&>*]:font-bold text-xl">
              {NAV_LINKS.map(({ label, href }) => (
                <SheetClose key={href} asChild>
                  <Link href={href}>{label}</Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
