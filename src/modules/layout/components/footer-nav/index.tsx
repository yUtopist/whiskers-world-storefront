"use client"

import { useCollections, useProductCategories } from "medusa-react"
import Link from "next/link"
import Image from "next/image"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="container-padding py-20 flex flex-col gap-16">
      <Link href="/">
        <Image
          src="/logo-simple.svg"
          width={280}
          height={40}
          alt="Whisker's World Logo"
        />
      </Link>
      <form className="flex flex-col gap-6">
        <h4 className="text-bright text-xl font-normal">
          Subscribe for weekly <span className="font-semibold">whiskers</span> updates.
        </h4>
        <input type="text" id="email" placeholder="Email Address" className="h-12 w-5/12 rounded-md pl-4" />
        <button className="w-56 bg-bright text-dark text-lg font-medium h-12 rounded-md">Subscribe</button>
      </form>
    </div>
    // <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
    //   <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
    //     <div>
    //       <Link href="/" className="text-xl-semi uppercase">
    //         Acme
    //       </Link>
    //     </div>
    //     <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
    //       {product_categories && (
    //         <div className="flex flex-col gap-y-2">
    //           <span className="text-base-semi">Categories</span>
    //           <ul className="grid grid-cols-1 gap-2">
    //             {product_categories?.slice(0, 6).map((c) => {
    //               if (c.parent_category) {
    //                 return
    //               }

    //               const children =
    //                 c.category_children?.map((child) => ({
    //                   name: child.name,
    //                   handle: child.handle,
    //                   id: child.id,
    //                 })) || null

    //               return (
    //                 <li className="flex flex-col gap-2" key={c.id}>
    //                   <Link
    //                     className={clsx(children && "text-small-semi")}
    //                     href={`/${c.handle}`}
    //                   >
    //                     {c.name}
    //                   </Link>
    //                   {children && (
    //                     <ul className="grid grid-cols-1 ml-3 gap-2">
    //                       {children &&
    //                         children.map((child) => (
    //                           <li key={child.id}>
    //                             <Link href={`/${child.handle}`}>
    //                               {child.name}
    //                             </Link>
    //                           </li>
    //                         ))}
    //                     </ul>
    //                   )}
    //                 </li>
    //               )
    //             })}
    //           </ul>
    //         </div>
    //       )}
    //       {collections && (
    //         <div className="flex flex-col gap-y-2">
    //           <span className="text-base-semi">Collections</span>
    //           <ul
    //             className={clsx("grid grid-cols-1 gap-2", {
    //               "grid-cols-2": (collections?.length || 0) > 3,
    //             })}
    //           >
    //             {collections?.slice(0, 6).map((c) => (
    //               <li key={c.id}>
    //                 <Link href={`/collections/${c.handle}`}>{c.title}</Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //       <div className="flex flex-col gap-y-2">
    //         <span className="text-base-semi">Medusa</span>
    //         <ul className="grid grid-cols-1 gap-y-2">
    //           <li>
    //             <a
    //               href="https://github.com/medusajs"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               GitHub
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="https://docs.medusajs.com"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Documentation
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="https://github.com/medusajs/nextjs-starter-medusa"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Source code
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
    //     <span className="text-xsmall-regular text-gray-500">
    //       © Copyright 2022 ACME
    //     </span>
    //     <div className="min-w-[316px] flex xsmall:justify-end">
    //       <CountrySelect />
    //     </div>
    //   </div>
    // </div>
  )
}

export default FooterNav
