'use client'
import { statistic } from "@/lib/types";
import { useEffect, useState} from "react";
import StatAvatar from "./StatAvatar";

export default function StatisticCard({statistic} : {statistic: statistic}){
    const [count, setCount] = useState<number>(0)


    useEffect(() => {
        let amount = parseInt(statistic.value);
        let i = 0
       

        let counter = setInterval(() => {
            if(i > amount){clearInterval(counter); return}
            setCount(i);
            i ++;

        }, 100)

    }, [])

    


    return (
            <div className="grid grid-cols-2 shadow-md shadow-primary bg-secondary rounded-lg ">
                <div className="stat place-items-start h-full grid-cols-2 sm:grid-cols-3 gap-4  col-start-1 col-end-3">
                    <div className="stat-title text-neutral font-semibold self-end">{statistic.title}</div>
                    <div className="stat-value text-primary text-[3rem] self-center">{count.toString() + statistic.type}</div>
                    <StatAvatar imgUrl={statistic.imgUrl} /> 
                    <div className="stat-desc text-neutral text-[0.85rem] lg:text-[0.75rem] text-wrap sm:text-nowrap ">{statistic.subtitle}</div>
                </div>
               
            </div>
           
        
       
    )
}