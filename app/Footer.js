import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-6 items-center px-[var(--gutter-width)] py-6 border-t border-foreground/5">
      <h2 className="text-lg font-dm inline-block">
        <Image
          src="/images/beyondFaith-logo-black.svg"
          alt="beyondFaith-logo"
          width={120}
          height={32}
          draggable="false"
        />
      </h2>
      <div className="flex items-center gap-x-6 tablet:gap-x-12 justify-end md:justify-center">
        <Link href="#">
          <Image
            src="/images/instagram.svg"
            alt="instagram"
            width={32}
            height={32}
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/linkedIn.svg"
            alt="linkedIn"
            width={32}
            height={32}
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/whatsapp.svg"
            alt="whatsapp"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <div className="flex flex-col items-center">
          <Link
            href={"/terms-and-conditions"}
            className="text-foreground/40 hover:text-colored-background transition ease-in-out flex text-sm"
          >
            Terms and conditions
          </Link>
          <span className="opacity-40 flex text-sm">© 2024 BeyondFaith</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
