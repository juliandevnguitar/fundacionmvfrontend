import { VscCircleLargeFilled} from "react-icons/vsc";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function About(){
    const t = useTranslations('Index')
    const currentLocale = useLocale();
    return (
        <>
        <section className="w-full bg-base-100 py-10 px-8 max-w-screen-xl flex flex-col items-center gap-10">
            <div className="w-full grid grid-cols-3 justify-items-center items-center gap-8 ">
                <h1 className="col-start-1 col-end-4  text-secondary text-xl lg:text-3xl font-bold mb-8">{t('about-title')}</h1>
                <p className="col-start-1 col-end-4 md:col-end-3 min-h-[3rem] text-neutral p-6 text-md lg:text-lg xl:text-xl bg-secondary w-full rounded-lg ">{t('about-p1')}</p>
                <img src={'/book-girls.png'} alt="Dibujo de dos mujeres sentadas sobre libros enormes y simbolos de educación" className="col-start-1 col-end-4 md:col-start-3 md:col-end-5 w-full lg:w-[70%]  object-cover" />
                <h2 className="col-start-1 col-end-4 text-secondary text-2xl  font-bold">{t('about-mission-title')}</h2>
                <p className="col-start-1 col-end-4 md:col-start-2 min-h-[3rem] text-neutral p-6 text-md lg:text-lg xl:text-xl bg-secondary w-full rounded-lg">{t('about-mission')}</p>
                <img src="/ciencia.png" alt="Dibujo de mujer científica en su laboratorio de química" className="col-start-1 col-end-4 md:col-end-2 md:row-start-4 w-full lg:w-[70%]  object-cover" />
                <h3 className="col-start-1 col-end-4 text-secondary text-2xl font-bold">{t('about-vision-title')}</h3>
                <p className="col-start-1 col-end-4 md:col-end-3 min-h-[3rem] text-neutral p-6 text-md lg:text-lg xl:text-xl bg-secondary w-full rounded-lg">{t('about-vision')} </p>
                <img src="/vision.png" alt="Dibujo de mujer científica en su laboratorio de química" className="col-start-1 col-end-4 md:col-start-3 w-full lg:w-[70%] object-cover" />
            </div>
            <p className="text-secondary text-center">{t('about-p2')}</p>
            <Link href={`${currentLocale}/contact`}><button className="btn btn-primary btn-lg rounded-xl text-neutral">{t('contact-btn')}</button></Link>
        </section>
        <section className="w-full bg-secondary py-10 px-8 flex flex-col items-center max-w-screen-xl rounded-lg">
            <h1 className="text-neutral text-xl lg:text-3xl font-bold mb-8">{t('objectives-title')}</h1>
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