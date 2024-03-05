export default function Grid({hobbies}){

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-2 p-6 justify-items-center justify-center">
            {hobbies.map((hobbie, index)=>(
                <div key={index} className="w-full flex flex-col hover:scale-110">
                    <img src={hobbie.src} alt={hobbie.title} className="w-full h-auto object-cover rounded-lg" style={{aspectRatio: '16/9'}} />
                    <p className="text-right pr-1 -translate-y-5">{hobbie.title}</p>
                </div>
            ))}
        </div>
    )
}