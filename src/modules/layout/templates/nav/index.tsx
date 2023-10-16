"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useCartDropdown } from "@lib/context/cart-dropdown-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useCart } from "medusa-react"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart, totalItems } = useCart()
  const { state, open, close } = useCartDropdown()

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <nav className="container-padding fixed h-16 flex items-center top-0 inset-x-0 bg-transparent text-dark">
      <Link href="/">
        <Image
          src="/logo.png"
          width={180}
          height={50}
          alt="Whisker's World Logo"
        />
      </Link>
      <ul className="nav-links flex flex-grow justify-end h-full">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/card" onMouseEnter={open} onMouseLeave={close}>
            My Basket ({totalItems})
          </Link>
        </li>
      </ul>
      <CartDropdown />
    </nav>
    // <div
    //   className={clsx("sticky top-0 inset-x-0 z-50 group", {
    //     "!fixed": isHome,
    //   })}
    // >
    //   <header
    //     className={clsx(
    //       "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
    //       {
    //         "!bg-white !border-gray-200": !isHome || isScrolled,
    //       }
    //     )}
    //   >
    //     <nav
    //       className={clsx(
    //         "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
    //         {
    //           "text-white group-hover:text-gray-900": isHome && !isScrolled,
    //         }
    //       )}
    //     >
    //       <div className="flex-1 basis-0 h-full flex items-center">
    //         <div className="block small:hidden">
    //           <Hamburger setOpen={toggle} />
    //         </div>
    //         <div className="hidden small:block h-full">
    //           <DropdownMenu />
    //         </div>
    //       </div>

    //       <div className="flex items-center h-full">
    //         <Link href="/" className="text-xl-semi uppercase">
    //           Acme
    //         </Link>
    //       </div>

    //       <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
    //         <div className="hidden small:flex items-center gap-x-6 h-full">
    //           {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
    //           <Link href="/account">Account</Link>
    //         </div>
    //         <CartDropdown />
    //       </div>
    //     </nav>
    //     <MobileMenu />
    //   </header>
    // </div>
  )
}

export default Nav
