'use server'
import { google } from "googleapis"

export  async function sendDatatoSpreadSheet(prevState, formData){

    const data = {
        name: formData.get('nombre').toString(),
        lastName: formData.get('apellidos').toString(),
        day: formData.get('dia').toString(),
        month: formData.get('mes').toString(),
        year: formData.get('year').toString(),
        email: formData.get('email').toString(),
        phone: formData.get('telefono').toString().replace(/\+/g, ''),
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

    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    const auth = await google.auth.getClient({credentials, scopes: ['https://www.googleapis.com/auth/spreadsheets']});

    const service = google.sheets({ version: 'v4', auth});

    try {
        
      const result = await service.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'A:J',
            valueInputOption: 'USER_ENTERED',
            resource,
        })
        
    }catch(err){
        return {status:'400'}
    }
    
    return {status: '200'}
    }   
    




