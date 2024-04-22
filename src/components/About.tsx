import { VscCircleLargeFilled} from "react-icons/vsc";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import AboutContent from "./ui/AboutContent";

export default function About(){
    const t = useTranslations('Index')
    const currentLocale = useLocale();

    const translations = {
        aboutTitle: t('about-title'),
        aboutP1: t('about-p1'),
        aboutMissionTitle: t('about-mission-title'),
        aboutMission: t('about-mission'),
        aboutVisionTitle: t('about-vision-title'),
        aboutVision: t('about-vision'),
        
    }

    return (
        <>
        <section className="w-full bg-base-100 py-10 px-8 max-w-screen-xl flex flex-col items-center gap-10">
            <AboutContent translations={translations}/>
            <p className="text-secondary text-center text-lg">{t('about-p2')}</p>
            <Link href={`/${currentLocale}/contact`} className="">
                    <button className="btn btn-primary btn-lg hover:btn-secondary w-full max-w-[400px]  shadow-black rounded-full  text-neutral text-md items-center ">{t('contact-btn')}<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg></button>
            </Link>
        </section>
        <section className="w-full bg-secondary py-10 px-8 flex flex-col items-center max-w-screen-xl rounded-lg">
            <h2 className="text-neutral text-xl lg:text-3xl font-bold mb-8">{t('objectives-title')}</h2>
            <ul className="flex flex-col gap-8 items-start">
                <li className="flex gap-2 w-full items-center">
                    <VscCircleLargeFilled className="w-10 text-primary" />
                    <p className="text-md text-neutral">{t('objective-one')}
                    </p>
                </li>
                <li className="flex gap-2 w-full items-center">
                <VscCircleLargeFilled className="w-10 text-primary" />
                    <p className="text-md text-neutral">
                        {t('objetive-two')}
                    </p>
                </li>
                <li className="flex gap-2 w-full items-center">
                <VscCircleLargeFilled className="w-10 text-primary" />
                    <p className="text-md text-neutral">
                        {t('objective-three')}
                    </p>
                </li>
            </ul>
            
        </section>
        </>

    )
}