

export default function StatAvatar({imgUrl} : {imgUrl: string}){

    return (
        <div className="avatar col-start-1 col-end-4 sm:col-start-3 sm:col-end-4 row-start-2 row-end-3 self-center">
        <div className="w-[100px] sm:w-[120px] rounded-full">
            <img src={imgUrl} alt='foto de niñas estudiando en escuela'/>
        </div>
    </div>
    )
}