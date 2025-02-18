import { FC } from "react";
import { PostData } from "../interface/PostData";
import { ArrowUpRight, Star } from "lucide-react";


function getBgColor(category: string){
    switch(category){
        case "Content":
            return "bg-green-700";
        case "Help":
            return "bg-yellow-700";
        case "New":
            return "bg-purple-700";
        case "Marketing":
            return "bg-blue-400"; 
    }
}

const TrendingCard: FC<{ data: PostData }> = ({ data }) => {
    return (
        <section className={`w-[10dvw] h-[14dvh] p-[.2dvw] rounded-[.3dvw] flex flex-col gap-[.5dvh] items-center justify-between ${getBgColor(data.postCategory)}`}>

            <div className="flex w-[10dvw] justify-around text-[.8dvw]">
                <p>{data.postCategory}</p>
                <button type="button" className="cursor-pointer">
                    <Star size={"1dvw"}/>
                </button>
                <p>+{data.likes} likes</p>
            </div>

            <h2 className="text-[1dvw] text-center">{data.title}</h2>

            <button type="button" className="flex items-center text-[.8dvw] text- cursor-pointer bg-yellow-600 hover:bg-yellow-500 p-[.2dvw]">
                CONFERIR
                <ArrowUpRight size={"1dvw"} />
            </button>
        </section>
    )
}

export default TrendingCard