'use client' 
import {motion} from "framer-motion"
import Link from "next/link"

interface heroTranslations {
    heroSubtitle: string,
    aboutBtn: string,
    contactBtn: string
}

export default function HeroContent({currentLocale, heroTranslations} : {currentLocale: string, heroTranslations: heroTranslations}){
    
    return (
     <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{type: 'tween', duration: 0.8}} viewport={{once:true, amount: 'all'}}
      className="hero-content p-[3rem] text-center text-neutral w-full max-w-full backdrop-blur-sm bg-secondary/50">
        <div className="max-w-xl  ">
            <h2 className="mb-5 text-6xl lg:text-8xl font-bold text-primary">Mujer Alada</h2>
            <h1 className="mb-5 font-semibold text-lg lg:text-2xl">{heroTranslations.heroSubtitle}</h1>
            <div className="flex gap-6 items-center justify-center ">
            <Link href={`${currentLocale}/about`}><button className="btn btn-primary btn-md lg:btn-lg btn-outline border-[2px] font-bold rounded-full text-neutral">{heroTranslations.aboutBtn}</button></Link>
            <Link href={`/${currentLocale}/contact`} className="">
                <button className="btn btn-primary lg:btn-lg hover:btn-secondary w-full max-w-[400px]  shadow-black rounded-full  text-neutral text-md items-center ">{heroTranslations.contactBtn}<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg></button>
            </Link>
            </div>
        </div>
    </motion.div>
    )
}