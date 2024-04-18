'use client'
import BirthdayPicker from "./BirthdayPicker"
import Phone from "./PhoneInput"
import Region from "./RegionPicker"
import { sendDatatoSpreadSheet } from "@/app/[locale]/contact/actions"
import { useFormState } from "react-dom"


const initialState = {
    message: '',
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


export default function ContactForm({formTranslations}: {formTranslations: formTranslations}){
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
            <input type="text" id="email" name="email" className="grow" placeholder="Email" required/>
            </label>
            <p className="text-secondary font-semibold col-start-1 col-end-3">{formTranslations.phone}</p>
            <Phone />
            <p className="text-secondary font-semibold col-start-1 col-end-5">{formTranslations.region}</p>
            <Region />
            <p className="text-secondary font-semibold col-start-1 col-end-5">{formTranslations.mediaLabel}</p>
            <select id="medio" name="medio" className="bg-secondary text-neutral p-4 col-start-1 col-end-5 rounded-xl">
                <option value="redes-sociales">{formTranslations.socialNetwork}</option>
                <option value="sitio-web">{formTranslations.webSite}</option>
                <option value="recomendación">{formTranslations.recomendation}</option>
                <option value="publicidad">{formTranslations.advertising}</option>
            </select>
            <p aria-live='polite' className={`${state?.status === '200' ? 'text-success' : 'text-red-500'} col-start-1 col-end-5`}>{state?.message}</p>
            <button className="btn btn-primary text-secondary col-start-2 col-end-4 font-bold">{formTranslations.submit}</button>
        </form>
    )
}