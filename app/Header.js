import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactFormSheet from "@/components/ContactFormSheet";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between fixed top-0 bg-foreground/40 backdrop-blur-md px-[var(--gutter-width)] text-accent z-50">
      <Link href={"/#home"} className="w-5/6 tablet:w-1/3">
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
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        {/* <Link href="/#shop">Shop</Link> */}
      </nav>
      <div className="w-1/3 flex justify-end items-center">
        <ContactFormSheet>
          <Button variant="outline" className="hidden tablet:flex">
            Talk to Us
          </Button>
        </ContactFormSheet>
      </div>
      <div className="w-fit tablet:hidden flex justify-end">
        <Sheet>
          <SheetTrigger>
            <Menu size={"28px"} />
          </SheetTrigger>
          <SheetContent className="!w-full !max-w-56">
            <SheetTitle className="sr-only">Navigations</SheetTitle>
            <div className="pt-28 px-6 flex flex-col gap-y-6 [&>*]:font-bold text-xl">
              <SheetClose asChild>
                <Link href="/">Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about">About</Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
