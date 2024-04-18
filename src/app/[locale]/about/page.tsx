
import ProfileCard from "@/components/ui/ProfileCard"
import fetchProfiles, {fetchAboutContent} from "@/app/actions"
import { Profile } from "@/lib/types"

async function AboutPage(props: any) {
  const locale = props.params.locale;
  const profiles = await fetchProfiles(locale)
  const content = await fetchAboutContent(locale)
  
  return (
    <main className="flex flex-col min-h-screen px-10 mt-[10rem] items-center mb-10 ">
        <h1 className="text-secondary text-2xl mb-8 font-bold">{content?.data[0]?.attributes.MainTitle}</h1>
        <p className="mb-8 text-neutral p-8 bg-secondary rounded-lg">{content?.data[0]?.attributes.MainText}</p>
        <h2 className="text-secondary text-xl font-semibold mb-8">{content?.data[0]?.attributes.MentorTitle}</h2>
        <div className="carousel carousel-center max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl p-4 space-x-4 bg-secondary rounded-box">
        {profiles.data.map( (profile: Profile) => (
          <div className="carousel-item" key={profile.id}>
            <ProfileCard profileInfo={profile} />
          </div>
          
        ))}
        </div>
       
        
    </main>
  )
}

export default AboutPage