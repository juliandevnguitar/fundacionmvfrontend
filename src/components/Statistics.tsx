import StatisticCard from "./ui/StatisticCard";
import { statistic } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function Statistics(){
    const t = useTranslations('Statistics')

const statistics: statistic[] = [
    {
        id: 0,
        value: '15',
        type: 'mill',
        title: t('stat1-title'),
        subtitle: t('stat1-description'),
        imgUrl: '/niñas-escuela.webp'
    },
    {
        id: 1,
        value: '127',
        type: 'mill',
        title: t('stat2-title'),
        subtitle: t('stat2-description'),
        imgUrl: '/perfil-niña.webp'
    },
    {
        id: 2,
        value: '8.4',
        type: '%',
        title: t('stat3-title') ,
        subtitle: t('stat3-description'),
        imgUrl: '/escuela-rural.webp'
    },
    {
        id: 3,
        value: '18',
        type: '%',
        title: t('stat4-title') ,
        subtitle: t('stat4-description'),
        imgUrl: '/escuela-rural.webp'
    }
]

    return (
        <section className="w-full bg-base-100 text-center rounded-lg py-10 px-2 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
            <h1 className="text-secondary text-2xl font-bold col-start-1 col-end-2 md:col-end-3 lg:col-end-4">{t('title')}</h1>
            {statistics.map((stat) => (
                <StatisticCard statistic={stat} key={stat.id}/>
            ))}
        </section>
    )
}