

export default function StatAvatar({imgUrl} : {imgUrl: string}){

    return (
        <div className="avatar col-start-1 col-end-4 sm:col-start-3 sm:col-end-4 row-start-2 row-end-3 self-center">
        <div className="w-20 sm:w-24 rounded-full">
            <img src={imgUrl} alt='foto de niñas estudiando en escuela'/>
        </div>
    </div>
    )
}