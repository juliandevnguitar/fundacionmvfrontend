'use client'
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation"
import { ChangeEvent, useTransition } from "react"


function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter();
  const currentLocale = useLocale();
  
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    
    startTransition(() => {
        router.replace(`/${nextLocale}`);
    })
  }


  return (
    <label className="border-2 rounded-lg border-primary" htmlFor="lang-selector">
        <select defaultValue={currentLocale} name="lang-selector" id="lang-selector" className="bg-primary py-2 text-secondary font-semibold cursor-pointer" onChange={onSelectChange} disabled={isPending}>
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    </label>
  )
}

export default LocaleSwitcher