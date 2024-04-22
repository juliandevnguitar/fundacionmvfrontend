'use client'
import { motion } from "framer-motion"

interface translations {
    aboutTitle: string,
    aboutP1: string,
    aboutMissionTitle: string,
    aboutMission: string,
    aboutVisionTitle: string,
    aboutVision: string
}


export default function AboutContent({translations} : {translations: translations}){

    return (
        <div className="w-full grid grid-cols-3 justify-items-center items-center gap-8 ">
                <motion.h2 initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                className="col-start-1 col-end-4  text-secondary text-xl lg:text-3xl font-bold mb-8">{translations.aboutTitle}</motion.h2>
                <motion.p initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                 className="col-start-1 col-end-4 md:col-end-3 min-h-[3rem] text-neutral p-6 text-md lg:text-lg xl:text-xl bg-secondary w-full rounded-lg ">{translations.aboutP1}</motion.p>
                <motion.img initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                src={'/book-girls.png'} alt="Dibujo de dos mujeres sentadas sobre libros enormes y simbolos de educación" className="col-start-1 col-end-4 md:col-start-3 md:col-end-5 w-full lg:w-[70%]  object-cover" />
                <motion.h2  initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                className="col-start-1 col-end-4 text-secondary text-2xl  font-bold">{translations.aboutMissionTitle}</motion.h2>
                <motion.p  initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                className="col-start-1 col-end-4 md:col-start-2 min-h-[3rem] text-neutral p-6 text-md lg:text-lg xl:text-xl bg-secondary w-full rounded-lg">{translations.aboutMission}</motion.p>
                <motion.img  initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                src="/ciencia.png" alt="Dibujo de mujer científica en su laboratorio de química" className="col-start-1 col-end-4 md:col-end-2 md:row-start-4 w-full lg:w-[70%]  object-cover" />
                <motion.h3  initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                className="col-start-1 col-end-4 text-secondary text-2xl font-bold">{translations.aboutVisionTitle}</motion.h3>
                <motion.p  initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                className="col-start-1 col-end-4 md:col-end-3 min-h-[3rem] text-neutral p-6 text-md lg:text-lg xl:text-xl bg-secondary w-full rounded-lg">{translations.aboutVision} </motion.p>
                <motion.img  initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{type: 'tween', duration: 1}} viewport={{once: true, amount: 0.8}}
                src="/vision.png" alt="Dibujo de mujer científica en su laboratorio de química" className="col-start-1 col-end-4 md:col-start-3 w-full lg:w-[70%] object-cover" />
        </div>
    )
}