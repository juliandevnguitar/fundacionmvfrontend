
import { useLocale, useTranslations } from "next-intl"
import HeroContent from "./ui/HeroContent";


export default function Hero(){
    const t = useTranslations('Index');
    const currentLocale = useLocale();

    const translations = {
        heroSubtitle: t('hero-subtitle'),
        aboutBtn: t('about-btn'),
        contactBtn: t('contact-btn')
    }
    return (
        <section className="hero min-h-screen " style={{backgroundImage: 'url(/hero-photo.webp)'}}>
        <div className="hero-overlay bg-opacity-60  bg-secondary"></div>
        <HeroContent currentLocale={currentLocale} heroTranslations={translations} />
    </section>
    )
}