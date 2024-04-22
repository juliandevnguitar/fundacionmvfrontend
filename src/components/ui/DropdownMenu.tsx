'use client'
import { SyntheticEvent, useState} from "react"
import Link from "next/link";
import cn from "classnames";



interface translations {
    home: string,
    about: string,
    join: string
}
export default function DropdownMenu({locale, translations} : {locale: string, translations: translations}){

    const [open, setOpen] = useState<boolean>(false);


    function handleClick(event: SyntheticEvent){
        event.stopPropagation
        setOpen(prev => !prev);
    }

    return (
        <div className={cn({dropdown: true, 'dropdown-open': open, 'dropdown-end ml-4': true})}>
            {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div> */}
            <label className="btn btn-circle swap swap-rotate" onClick={() => setOpen((prev) => !prev)}>
  
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" checked={open? true : false} readOnly onClick={(e) => handleClick(e)}/>
            
            {/* hamburger icon */}
            <svg className={cn({'swap-off current-fill h-10 w-10 text-primary': open, })} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            
            {/* close icon */}
            <svg className={cn({'swap-on current-fill h-10 w-10 text-primary' : !open, 'text-primary': true})} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            
            </label>
            
            <ul tabIndex={0} className={cn({
                'menu menu-lg dropdown-content mt-3 items-center z-[20] p-2 shadow bg-base-100 rounded-box w-screen h-screen': true,
                hidden: !open
            })}>
                <li className="hover:text-primary text-secondary font-semibold" onClick={(event) => handleClick(event)}><Link href={`/${locale}`}>{translations.home}</Link></li>
                <li className="hover:text-primary text-secondary font-semibold" onClick={(event) => handleClick(event)}><Link href={`/${locale}/about`}>{translations.about}</Link></li>
                <li className="hover:text-primary text-secondary font-semibold" onClick={(event) => handleClick(event)} ><Link href={`/${locale}/contact`}>{translations.join}</Link></li>
            </ul>
        </div>
    )
}