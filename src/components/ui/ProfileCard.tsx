import Link from "next/link"
import { useLocale } from "next-intl"
import strapiConfig from "@/strapiConfig"
import { Profile } from "@/lib/types";


function ProfileCard({profileInfo} : {profileInfo: Profile}) {  
  const currentLocale = useLocale();
  const content = profileInfo.attributes
  const pictureUrl = content.Picture.data.attributes.url

  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-items-center rounded-lg bg-primary w-[250px] sm:w-[350px] py-8 px-4">
        <img src={`${strapiConfig.api}${pictureUrl}`} alt="Fotografia de Maestra en forma de selfie" className="col-start-1 col-end-3 rounded-full object-cover w-[200px] h-[200px] border-[5px] border-secondary"/>
        <h1 className="text-secondary font-bold">{content.Name}</h1>
        <p className="text-secondary font-semibold">{content.Degree}</p>
        <Link href={`/${currentLocale}/about/${content.mentorId}`} className="col-start-1 col-end-3"><button className="btn btn-secondary w-[200px] rounded-xl mt-4 shadow-lg hover:scale-95 transition-all">{currentLocale === 'en' ? 'Get to know me' : 'Conóceme'}</button></Link>
    </div>
  )
}

export default ProfileCard