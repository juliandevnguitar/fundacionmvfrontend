'use server'
import { google } from "googleapis"
import { redirect } from 'next/navigation'
import { useLocale } from "next-intl"


export  async function sendDatatoSpreadSheet(prevState, formData){

    const currentLocale = useLocale();
    
    const data = {
        name: formData.get('nombre').toString(),
        lastName: formData.get('apellidos').toString(),
        day: formData.get('dia').toString(),
        month: formData.get('mes').toString(),
        year: formData.get('year').toString(),
        email: formData.get('email').toString(),
        phone: formData.get('telefono').toString(),
        country: formData.get('pais').toString(),
        region: formData.get('region/estado').toString(),
        media: formData.get('medio').toString()
        
      }

      const dataArray= Object.values(data);

      let values = [[]]

      dataArray.forEach( (data) => {
        values[0].push(data);
      } )

    const resource = {
        values,
    }


    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets']});

    const service = google.sheets({ version: 'v4', auth});

    try {
        
      const result = await service.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'A:J',
            valueInputOption: 'USER_ENTERED',
            resource,
        })
        
    }catch(err){
        return {message: 'Lo sentimos, ocurrió un problema al mandar la solicitud', status:'400'}
    }
    
    redirect(`/${currentLocale}/success`)
    }   
    




