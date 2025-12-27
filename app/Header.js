import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between fixed top-0 bg-foreground/40 backdrop-blur-md px-[var(--gutter-width)] text-accent z-10">
      <Link href={"/#home"} className="w-full tablet:w-1/3">
        <span className="font-dm text-lg inline-block">
          <Image
            src={"/images/beyondFaith-logo-white.svg"}
            height={40}
            width={160}
            alt="beyondFaith-logo"
            className="translate-y-1"
          />
        </span>
      </Link>
      <nav className="hidden tablet:flex items-center gap-x-10 font-inter text-sm w-1/3 justify-center">
        <Link href="/#home">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#faq">FAQ</Link>
        {/* <Link href="/#shop">Shop</Link> */}
      </nav>
      <div className="w-1/3 flex justify-end items-center">
        <Button variant="outline" className="hidden tablet:flex">
          Talk to Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
