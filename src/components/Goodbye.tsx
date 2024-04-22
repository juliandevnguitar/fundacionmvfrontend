import { useTranslations } from "next-intl"

function Goodbye() {
  const t = useTranslations('Goodbye')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-xl p-8 md:p-4 mb-10">
        <h3 className="text-xl text-secondary font-bold ">{t('title')}</h3>
        <img src="/chicas-estudiando.webp" alt="tres chicas jóvenes estudiando en una banca de parque" className="rounded-lg w-full" />
    </div>
  )
}

export default Goodbye