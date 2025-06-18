import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps{
  id:string;
  name:string;
  topic:string;
  subject:string;
  duration:number;
  color:string;
}
const CompanionCard = ({id, name,topic, subject,duration,color}:CompanionCardProps) => {
  return (
    <article className="flex flex-col rounded-4xl border border-black px-4 py-4 gap-5 w-full min-lg:max-w-[410px] justify-between" style={{background:color}}>
      <div className="flex justify-between items-center">
        <div className="bg-black text-white rounded-4xl text-sm px-2 py-1 capitalize">{subject}</div>
        <button className="px-2 bg-black rounded-4xl flex items-center h-full aspect-square cursor-pointer">
          <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5}/>
        <p className="tsxt-sm">{duration} Minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="bg-primary w-full text-center mx-auto text-white rounded-xl cursor-pointer px-4 py-2 flex items-center justify-center gap-2">Launch Lesson</button> 
      </Link>
    </article>
  )
}

export default CompanionCard