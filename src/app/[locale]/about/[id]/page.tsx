import {fetchProfilesById} from "@/app/actions"
import { Profile } from "@/lib/types"
import strapiConfig from "@/strapiConfig"


async function ProfilePage(props: any) {
  
  const profile = await fetchProfilesById(`filters[mentorId][$eq]=${props.params.id}`, props.params.locale)
  const content: Profile = profile.data[0]
  const pictureUrl = content.attributes.Picture.data.attributes.url

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-3 w-full px-6 mt-[10rem] items-center mb-10 ">
        <div className="grid grid-cols-2 lg:min-h-full  gap-4 items-center justify-items-center  bg-primary w-full py-8 px-0 rounded-t-lg lg:rounded-lg ">
          <img src={`${strapiConfig.api}${pictureUrl}`} alt="Fotografia de Maestra en forma de selfie" className="col-start-1 col-end-3 rounded-full object-cover w-[200px] h-[200px] border-[5px] border-secondary"/>
          <h1 className="text-secondary font-bold lg:text-lg">{content.attributes.Name}</h1>
          <p className="text-secondary font-semibold lg:text-lg">{content.attributes.Degree}</p>
         </div>
       <div className="bg-secondary w-full lg:col-start-2 lg:col-end-4 flex flex-col items-center rounded-b-lg lg:rounded-lg  py-10">
        <div className="shadow-lg w-[300px] flex flex-col items-center rounded-lg p-10 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-neutral w-[100px]"  viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg>
          <p className="text-xl text-neutral font-bold">{content.attributes.School}</p>
        </div>
          <p className="text-neutral px-10">{content.attributes.Description}</p>
       </div>      
    </section>
  )
}

export default ProfilePage