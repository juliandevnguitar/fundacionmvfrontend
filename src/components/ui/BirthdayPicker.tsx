'use client'
import CheckLeapYear from "@/utils/isLeapYear";
import { useEffect, useState } from "react";



export default function BirthdayPicker({months} : {months: string[]}){
    const [isLeapYear, setisLeapYear] = useState<boolean>(false);
    const [numberofDays, setNumberofDays] = useState<number>(31);
    const [month, setMonth] = useState<string>('')

    const largeMonths = [months[0], months[2], months[4],months[6], months[7], months[9], months[11]]

    function getDays(month: string){
        if (month === months[1] && !isLeapYear){
            return setNumberofDays(28);
        } else if (month === months[1] && isLeapYear){
            return setNumberofDays(29);
        }
        else if(largeMonths.includes(month)){
          return setNumberofDays(31)
        }
        else {
           return setNumberofDays(30)
        }

    }

    function getDaysArray(){
        let i;
        const days = []
        for (i = 0; i < numberofDays; i++){
            days.push(i + 1);
        }

        return days;
    }

    function getLeapYear(year: number){
        if(CheckLeapYear(year)) {
            return setisLeapYear(true);
        }
        return setisLeapYear(false)
    }

    function getYearsOptions(){
        const currentYear = new Date().getFullYear()
        let i;
        const years = [];
        for (i = currentYear - 100 ; i <= currentYear; i ++){
            years.push(i);
        }
        return years;
    }

    useEffect(() => {
        getDays(month)
        
    }, [isLeapYear])

    return (
        <div className="flex gap-4 items-center justify-start w-full col-start-1 col-end-5" id="fecha">
            <select name="dia" id="dia" className="bg-secondary p-4 rounded-xl font-semibold text-neutral ">
               {
                getDaysArray().map((day) => (
                    <option value={day.toString()} key={day}>{day}</option>
                ))
               }
            </select>
            <select name="mes" id="mes" className="bg-secondary p-4 rounded-xl text-neutral font-semibold " 
            onChange={
                (event) => {
                    getDays(event.target.value)
                    setMonth(event.target.value)
                }
            
            }
            >
               <option value={months[0]}>{months[0]}</option>
               <option value={months[1]}>{months[1]}</option>
               <option value={months[2]}>{months[2]}</option>
               <option value={months[3]}>{months[3]}</option>
               <option value={months[4]}>{months[4]}</option>
               <option value={months[5]}>{months[5]}</option>
               <option value={months[6]}>{months[6]}</option>
               <option value={months[7]}>{months[7]}</option>
               <option value={months[8]}>{months[8]}</option>
               <option value={months[9]}>{months[9]}</option>
               <option value={months[10]}>{months[10]}</option>
               <option value={months[11]}>{months[11]}</option>
            </select>
            <select name="year" id="year" className=" bg-secondary p-4 rounded-xl text-neutral font-semibold "
             onChange={(event) => getLeapYear(parseInt(event.target.value))}
             >
               {getYearsOptions().map(( year) => (
                <option value={year.toString()} key={year}>{year}</option>
               ))}
            </select>
        </div>
    )

}