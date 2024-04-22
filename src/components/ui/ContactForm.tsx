'use client'
import BirthdayPicker from "./BirthdayPicker"
import Phone from "./PhoneInput"
import Region from "./RegionPicker"
import { sendDatatoSpreadSheet } from "@/app/[locale]/contact/actions"
import { useFormState } from "react-dom"
import Link from "next/link"


const initialState = {
    status: ''
}

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

interface messages {
    success: string,
    error: string
}


export default function ContactForm({formTranslations, messages, locale}: {formTranslations: formTranslations, messages: messages, locale: string}){
    const [state, formAction] = useFormState(sendDatatoSpreadSheet, initialState)

    const months = formTranslations.months.split(', ');
    

    return (
        <form className="grid grid-cols-4 py-10  gap-6 w-full max-w-lg" action={formAction}>
            <p  className="text-secondary font-semibold">{formTranslations.nameLabel}</p>
            <label className="input input-bordered input-secondary bg-secondary text-neutral flex items-center gap-2 col-start-1 col-end-5" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder={`${formTranslations.nameLabel}`} id="nombre" name="nombre" required/>
            </label>
            <label htmlFor="apellidos" className="text-secondary font-semibold">{formTranslations.LastName}</label>
            <label className="input input-bordered input-secondary bg-secondary text-neutral flex items-center gap-2 col-start-1 col-end-5" htmlFor="apellidos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder={formTranslations.LastName} id="apellidos" name="apellidos" required/>
            </label>
            <label htmlFor="fecha" className="text-secondary font-semibold col-start-1 col-end-5">{formTranslations.dob}</label>
            <BirthdayPicker months={months} />
            <p className="text-secondary font-semibold">Email</p>
            <label className="input input-bordered bg-secondary text-neutral flex items-center gap-2 col-start-1 col-end-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="email" id="email" name="email" className="grow" placeholder="Email" required/>
            </label>
            <p className="text-secondary font-semibold col-start-1 col-end-3">{formTranslations.phone}</p>
            <Phone />
            <p className="text-secondary font-semibold col-start-1 col-end-5">{formTranslations.region}</p>
            <Region locale={locale} />
            <p className="text-secondary font-semibold col-start-1 col-end-5">{formTranslations.mediaLabel}</p>
            <select id="medio" name="medio" className="bg-secondary text-neutral p-4 col-start-1 col-end-5 rounded-xl">
                <option value="redes-sociales">{formTranslations.socialNetwork}</option>
                <option value="sitio-web">{formTranslations.webSite}</option>
                <option value="recomendación">{formTranslations.recomendation}</option>
                <option value="publicidad">{formTranslations.advertising}</option>
            </select>
            {/* <p aria-live='polite' className={`${state?.status === '200' ? 'text-success' : 'text-red-500'} col-start-1 col-end-5`}>{state?.message}</p> */}
            {state?.status === '200' && (
            <div className="toast toast-center toast-middle z-20">
                 <div className="w-full px-10 h-screen bg-neutral-300 flex flex-col items-center justify-center">
                    <div className=" flex flex-col gap-4  p-8  rounded-lg bg-secondary items-center text-center">
                        <h1 className="text-primary text-xl font-bold ">{messages.success}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-primary" viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg>
                    </div>
                    <Link href={`/`}><button className="btn btn-primary hover:btn-secondary mt-8 text-neutral">Home</button></Link>
                </div>
            </div>)}
            {state?.status === '400' && (
            <div className="toast toast-center toast-middle z-20">
            <div className="w-full px-10 h-screen bg-neutral-300 flex flex-col items-center justify-center">
               <div className=" flex flex-col gap-4  p-8  rounded-lg bg-secondary items-center text-center">
                   <h1 className="text-red-500 text-xl font-bold ">{messages.error}</h1>
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-primary" viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg>
               </div>
               <Link href={`/`}><button className="btn btn-primary hover:btn-secondary mt-8 text-neutral">Home</button></Link>
           </div>
       </div>
            )}
            <button className="btn btn-primary text-secondary col-start-2 col-end-4 font-bold">{formTranslations.submit}</button>
        </form>
    )
}