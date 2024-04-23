'use client'
import Link from "next/link"
import DropdownMenu from "./ui/DropdownMenu";
import { motion, useScroll, useMotionValueEvent, useMotionValue} from "framer-motion";
import { useState } from "react";
import LocaleSwitcher from "./ui/LocaleSwitcher";

interface translations {
    home: string,
    join: string,
    about: string,
    donations: string
}

export default function NavBar({translations, locale} : {translations: translations, locale: string}){
    const [hidden, setHidden] = useState<boolean>(false)

    const { scrollY} = useScroll()

    useMotionValueEvent(scrollY, "change", () => {
       if (scrollY.getVelocity() > 50) {
        setHidden(true)
       } else if (scrollY.getVelocity() <= 20) {
        setHidden(false)
       }
       
      })

    const currentLocale = locale

 
    return (
        <div className={`navbar ${hidden ? 'hidden' : ''} fixed backdrop-blur-lg bg-neutral/70 p-[1em] z-20`}>
        <div className="navbar-start">
         <img src='/logo.png' alt="logotipo mujer alada" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"  />
        </div>
        
        <div className="navbar-end md:hidden">
            <LocaleSwitcher />
            <DropdownMenu locale={currentLocale} translations={translations} />
        </div>
        <nav className="navbar-end hidden md:flex">
            <ul className="flex gap-6 text-secondary font-bold text-md items-center mr-4">
                <li className="hover:text-primary"><Link href={`/${currentLocale}`}>{translations.home}</Link></li>
                <li className="hover:text-primary"><Link href={`/${currentLocale}/about`}>{translations.about}</Link></li>
                <li className="hover:text-primary"><Link href={`/${currentLocale}/contact`}>{translations.join}</Link></li>
                <button className="btn btn-primary rounded-2xl">{translations.donations}</button>
                
            </ul>
            <LocaleSwitcher />
        </nav>
    </div>
    )
}