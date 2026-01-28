import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between gap-y-6 items-center px-[var(--gutter-width)] py-6 border-t border-foreground/5">
      <div className="w-fit h-full flex flex-col justify-center my-auto">
        <h2 className="text-lg inline-block">
          <Image
            src="/images/beyondFaith-logo-black.svg"
            alt="beyondFaith-logo"
            width={120}
            height={32}
            draggable="false"
          />
        </h2>
        <span className="opacity-40 flex text-sm mb-2">© {new Date().getFullYear()} BeyondFaith</span>
        {/* <span className="opacity-30 flex text-xs">Developed by Alfred Nelson</span> */}
      </div>
      <div className="flex flex-col items-start md:items-end gap-y-4 w-fit">
        <div className="flex items-center w-full gap-x-6 tablet:gap-x-12 justify-center md:justify-end">
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
        <div className="flex items-center flex-col md:flex-row gap-y-4">
          <Link
            href={"/terms-and-conditions"}
            className="text-foreground/40 hover:text-colored-background transition ease-in-out flex text-sm md:pr-5 md:border-r"
          >
            Terms and conditions
          </Link>
          <Link
            href={"/privacy-policy"}
            className="text-foreground/40 hover:text-colored-background transition ease-in-out flex text-sm md:ml-5"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
