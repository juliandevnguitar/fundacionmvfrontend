'use client'
import { statistic } from "@/lib/types";
import { useEffect, useState} from "react";
import StatAvatar from "./StatAvatar";
import { motion } from "framer-motion";

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
    
        <motion.div initial={{scale:0, opacity: 0, translateY: 200, zIndex: 1, backgroundColor: "#41C1BA", color: '#1D4355'}} 
                    whileInView={{scale: 1, opacity: 1, translateY: 0}} 
                    whileHover={{scale: 1.1, zIndex: 10, backgroundColor: '#1D4355', color: '#F2F1EC'}}
                    transition={{type:'tween', duration:0.8}}
                    viewport={{once: true, amount: 0.6}}
         className="flex flex-col item-center bg-primary text-secondary rounded-xl py-6 px-8 w-[230px] min-h-[380px] ">
            <div className="text-[1.2rem] font-semibold mb-4 ">{statistic.title}</div>
            <StatAvatar imgUrl={statistic.imgUrl} /> 
            <div className="text-[2.6rem] font-extrabold mt-6">{count.toString() + statistic.type}</div>
            <div className=" font-semibold text-sm">{statistic.subtitle}</div>
        </motion.div>
    )
}