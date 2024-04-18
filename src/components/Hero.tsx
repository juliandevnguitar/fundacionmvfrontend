import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"


export default function Hero(){
    const t = useTranslations('Index');
    const currentLocale = useLocale();

    return (
        <section className="hero min-h-screen " style={{backgroundImage: 'url(/hero-photo.webp)'}}>
        <div className="hero-overlay bg-opacity-60  bg-secondary"></div>
        <div className="hero-content p-[3rem] text-center text-neutral w-full max-w-full backdrop-blur-sm bg-secondary/50">
            <div className="max-w-xl  ">
                <h1 className="mb-5 text-6xl lg:text-8xl font-bold text-primary">Mujer Alada</h1>
                <p className="mb-5 font-semibold text-lg lg:text-2xl">{t('hero-subtitle')}</p>
                <div className="flex gap-6 items-center justify-center ">
                <Link href={`${currentLocale}/about`}><button className="btn btn-primary btn-md lg:btn-lg btn-outline border-[2px] font-bold rounded-xl text-neutral">{t('about-btn')}</button></Link>
                <Link href={`${currentLocale}/contact`}><button className="btn btn-primary btn-md  lg:btn-lg rounded-xl text-neutral">{t('contact-btn')}</button></Link>
                </div>
            </div>
        </div>
        </section>
    )
}