


export default function CheckLeapYear(year: number){

    if (year % 4 !== 0){
        return false;
    }

    else if(year % 100 === 0){
       return year % 400 === 0 ? true : false;
    } 

    return true
}