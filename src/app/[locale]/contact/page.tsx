
import ContactForm from "@/components/ui/ContactForm";
import { useTranslations } from "next-intl";

interface formTranslations {
    nameLabel: string,
        LastName: string,
        dob: string,
        months: string,
        phone: string,
        region: string,
        mediaLabel: string,
        socialNetwork : string,
        webSite : string,
        recomendation: string,
        advertising: string,
        submit: string
}

export default function ContactPage(){
    const t = useTranslations('ContactForm')

    const translations: formTranslations = {
        nameLabel: t('name-label'),
        LastName: t('lastname-label'),
        dob: t('dob'),
        months: t('months'),
        phone: t('phone-label'),
        region: t('region-label'),
        mediaLabel: t('media-label'),
        socialNetwork: t('media-social-network'),
        webSite: t('media-web-site'),
        recomendation: t('media-recomendation'),
        advertising: t('media-advertising'),
        submit: t('submit-btn')

    }
    
    return (
        <main className="w-full bg-base-100 py-10 px-8 max-w-screen-xl mt-[100px] flex flex-col items-center">
            <h1 className="text-secondary text:lg lg:text-2xl">
                {t('contact-p1')}
            </h1>
            <h2 className="text-secondary text:md self-start mt-6">{t('contact-p2')}</h2>
            <ContactForm formTranslations={translations} />

            
        </main>
    )
}