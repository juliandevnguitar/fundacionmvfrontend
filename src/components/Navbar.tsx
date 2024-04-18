
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import LocaleSwitcher from "./ui/LocaleSwitcher";

export default function NavBar(){
    const t = useTranslations('Navbar')
    const currentLocale = useLocale();
    return (
        <div className="navbar fixed backdrop-blur-lg bg-neutral/70 p-[1em] z-20">
        <div className="navbar-start">
         <img src='/logo.png' alt="logotipo mujer alada" className="w-[80px] h-[80px]"  />
        </div>
        
        <div className="navbar-end md:hidden">
            <LocaleSwitcher />
            <div className="dropdown dropdown-end ml-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            
            <ul tabIndex={0} className="menu menu-lg dropdown-content dropdown-end mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="hover:text-primary"><Link href={`/${currentLocale}`}>{t('home')}</Link></li>
                <li className="hover:text-primary"><Link href={`/${currentLocale}/about`}>{t('about')}</Link></li>
                <li className="hover:text-primary"><Link href={`/${currentLocale}/contact`}>{t('join')}</Link></li>
            </ul>
            </div>
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