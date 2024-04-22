
import Link from "next/link"
import DropdownMenu from "./ui/DropdownMenu";
import { useTranslations, useLocale } from "next-intl"
import LocaleSwitcher from "./ui/LocaleSwitcher";

export default function NavBar(){
    const t = useTranslations('Navbar')
    const currentLocale = useLocale();

    const translations = {
        home: t('home'),
        about: t('about'),
        join: t('join')
    }
    return (
        <div className="navbar fixed backdrop-blur-lg bg-neutral/70 p-[1em] z-20">
        <div className="navbar-start">
         <img src='/logo.png' alt="logotipo mujer alada" className="w-[80px] h-[80px]"  />
        </div>
        
        <div className="navbar-end md:hidden">
            <LocaleSwitcher />
            <DropdownMenu locale={currentLocale} translations={translations} />
        </div>
        <nav className="navbar-end hidden md:flex">
            <ul className="flex gap-6 text-secondary font-bold text-md items-center mr-4">
                <li className="hover:text-primary"><Link href={`/${currentLocale}`}>{t('home')}</Link></li>
                <li className="hover:text-primary"><Link href={`/${currentLocale}/about`}>{t('about')}</Link></li>
                <li className="hover:text-primary"><Link href={`/${currentLocale}/contact`}>{t('join')}</Link></li>
                <button className="btn btn-primary rounded-2xl">{t('donation')}</button>
                
            </ul>
            <LocaleSwitcher />
        </nav>
    </div>
    )
}