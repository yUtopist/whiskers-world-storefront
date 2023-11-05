"use client"

import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"

const FooterNav = () => {
  const footerStyle = clsx(
    "container-padding",
    "bg-paw",
    "pt-20",
    "flex",
    "flex-wrap",
    "text-bright"
  )

  return (
    <footer className={footerStyle}>
      <div className="flex flex-col gap-14 grow">
        <Link href="/">
          <Image
            src="/logo-simple.svg"
            width={280}
            height={40}
            alt="Whisker's World Logo"
          />
        </Link>
        <form className="flex flex-col">
          <h4 className="text-xl font-normal">
            Subscribe for weekly <span className="font-semibold">whiskers</span> updates.
          </h4>
          <input
            type="text"
            id="email"
            placeholder="Email Address"
            className="h-12 w-5/12 rounded-md pl-4 mt-6 mb-4"
          />
          <button className="w-56 bg-bright text-dark text-lg h-12 rounded-md">
            Subscribe
          </button>
        </form>
        <a
          href="https://www.instagram.com/whiskersworld/"
          target="_blank"
          className="w-fit"
        >
          <Image
            src="/svg/social-insta.svg"
            width={40}
            height={40}
            alt="Whisker's World Instagram"
          />
        </a>
      </div>

      <div className="flex gap-20">
        <div>
          <h4 className="font-semibold ">Shopping</h4>
          <ul className="flex flex-col gap-1 mt-6">
            <PageLink href="/search?by=breed">By Breed</PageLink>
            <PageLink href="/search?by=recent">Recently Added</PageLink>
            <PageLink href="/search?by=featured">Featured Whiskers</PageLink>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Whiskers World</h4>
          <ul className="flex flex-col gap-1 mt-6">
            <PageLink href="/about">About Us</PageLink>
            <PageLink href="/contact">Contact</PageLink>
            <PageLink href="/faq">FAQ</PageLink>
            <PageLink href="/return-policy">Return Policy</PageLink>
          </ul>
        </div>
      </div>

      <div className="w-full mt-28 flex items-center">
        <h5 className="font-medium">
          Whiskers World made by{" "}
          <a
            target="_blank"
            href="https://blackdotdigital.co.nz"
            className="underline"
          >
            Blackdot Digital
          </a>
        </h5>
        <Image
          src={"/svg/paw-footer.svg"}
          width={40}
          height={40}
          alt="Little Paw"
          className="ml-6"
        />
      </div>
    </footer>
  )
}

interface PageLinkInterface {
  href: string
  children: React.ReactNode
}

const PageLink = ({ href, children }: PageLinkInterface) => {
  return (
    <li>
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    </li>
  )
}

export default FooterNav
