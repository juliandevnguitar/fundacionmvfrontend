'use server'
import strapiConfig from "@/strapiConfig"
import { revalidatePath } from "next/cache"


export default async function fetchProfiles(locale){
   
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`
      } ,
      next: { revalidate: 3600}
    }
    const request = await fetch(`${strapiConfig.api}/api/profiles?populate=*&locale=${locale}`, requestOptions);
    const response = await request.json();
    
    return response
  
  }

export async function fetchProfilesById(params = '', locale){
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`
    } ,
    next: { revalidate: 3600}
  }
  const request = await fetch(`${strapiConfig.api}/api/profiles?populate=*&locale=${locale}&${params}`, requestOptions);
  const response = await request.json();
  
  return response


}

export async function fetchAboutContent(locale){
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`
    } ,
    next: { revalidate: 0 }
  }

  const request = await fetch(`${strapiConfig.api}/api/abouts?locale=${locale}`, requestOptions)
  const response = await request.json();

 

  return response

}