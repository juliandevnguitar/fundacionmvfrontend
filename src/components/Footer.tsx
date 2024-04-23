import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  const currentLocale = useLocale();
  const t = useTranslations('Footer')
  return (
    <footer className="bg-primary text-secondary grid grid-cols-4 py-8 px-8 gap-2 items-center justify-items-center w-full">
    <img src="/logo-secondary.png" alt="logotipo de mujer alada" className="w-[200px] max-w-sm opacity-20 justify-self-start col-start-1 col-end-3 row-start-2 row-end-5 z-0"/>
    <h2 className="text-md lg:text-xl font-bold z-10 col-start-1 col-end-5 row-start-1 ">{t('title')}</h2>
    <Link href={`/${currentLocale}/contact`} className=" col-start-2 col-end-4 row-start-2 lg:col-start-2 lg:col-end-4 lg:row-start-2  z-10">
    <button className="btn btn-secondary  hover:text-primary w-full max-w-[300px]  shadow-black rounded-full  text-neutral text-md items-center ">Súmate <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg></button>
    </Link>
    <ul className="flex justify-evenly gap-4 items-center col-start-1 col-end-5 text-[0.75rem] backdrop-blur-md  h-2 row-start-3 row-end-4 font-semibold cursor-pointer">
        <Link href={`/${currentLocale}/about`} className="z-10 p-2 text-xs font-bold "><li>{t('about')}</li></Link>
        <Link href={`/${currentLocale}/contact`} className="p-2 z-10 text-xs font-bold"><li>{t('contact')}</li></Link>
        <Link href={`/${currentLocale}`} className=" p-2 z-10 text-xs font-bold"><li>{t('privacy')}</li></Link>
        <Link href={`/${currentLocale}`} className=" p-2 z-10 text-xs font-bold"><li>{t('TandC')}</li></Link>
    </ul>
    <h2 className="text-md lg:text-xl col-start-1 col-end-5 row-start-4 row-end-5 font-bold h-2 m-0">{t('subtitle')}</h2>
    <div className="flex items-center justify-center col-start-1 col-end-5 row-start-7 gap-6 text-lg mt-4">
        <Link href={'/'} className="text-[2em]"><SlSocialInstagram className="cursor-pointer"/></Link>
        <Link href={'/'} className="text-[2em]"><SlSocialFacebook className="cursor-pointer" /></Link>
        <Link href={'/'} className="text-[2em]"><RiTwitterXFill className="cursor-pointer" /></Link>
    </div>
    <p className="text-sm lg:text-md  font-semibold col-start-1 col-end-5 row-start-8 mt-6 text-center">{t('copyright')}</p>
    </footer>
  )
}

export default Footer