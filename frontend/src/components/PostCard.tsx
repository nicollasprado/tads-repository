import { FC } from "react";
import { PostData } from "../interface/PostData";
import { ArrowUpRight, Star } from "lucide-react";

function formatNumDate(num: number){
    return (num < 10) ? "0" + num.toString() : num;
}

function getCategoryColor(category: string){
    switch(category){
        case "Content":
            return "bg-green-700";
        case "Help":
            return "bg-yellow-500";
        case "New":
            return "bg-purple-500";
        case "Marketing":
            return "bg-blue-400"; 
    }
}

// TODO - Fix this function to get how much time ago was posted
function getPostTimeAgo(postDate: number[]){
    const now = new Date();

    const actualYear = Number(now.getFullYear());
    const actualMonth = Number(now.getMonth()+1);
    const actualDay = Number(now.getDate());

    const postYear = postDate[0];
    const postMonth = postDate[1];
    const postDay = postDate[2];

    let yearsToDays = (actualYear - postYear) * 30;
    let monthsToDays = postMonth - actualMonth;

    if(postMonth > actualMonth){
        monthsToDays = monthsToDays * 30;
    }

    if(postDate[1] >= 2){
        // february
        monthsToDays -= 2;
        // days with 31
        monthsToDays += (postMonth / 2) + 1;
    }

    let days;
    if(actualMonth > postMonth){
        days = Math.abs(actualDay - postDay);
    }else{
        days = Number(actualDay - postDay);
    }


    let sum = days + yearsToDays + monthsToDays

    if(sum < 0){
        sum *= -1;
    }

    if(actualYear > postYear){
        sum += ((actualYear - postYear) * 365 - 30);
        sum += monthsToDays * 30;
        console.log(yearsToDays)
    }

    return sum;
}

const PostCard: FC<{ data: PostData }> = ({ data }) => {

    return (
        <article className={`w-[40dvw] h-[16dvh] drop-shadow-2xl flex flex-col gap-[1dvh] rounded-[.5dvw] ${getCategoryColor(data.postCategory)}`}>

            <span className="flex items-center justify-between border-b-[.1dvw] border-white px-[.5dvw]">
                <span className="flex gap-[.5dvw] items-center">
                    <p className="text-[.8dvw]">{data.postCategory}</p>
                    <button type="button" className="cursor-pointer">
                        <Star size={"1.1dvw"}/>
                    </button>
                </span>

                <h2 className="text-[1.2dvw]">{data.title}</h2>
                <span>
                    <p className="text-[.8dvw]">
                        {data.createdAt[2]}/{formatNumDate(data.createdAt[1])}/{data.createdAt[0]}
                    </p>
                </span>
            </span>

            <span className="flex flex-col items-center gap-[4.6dvh]">
                <p className="text-[.8dvw]">{data.text}</p>
                <button className="flex items-center text-[.9dvw] cursor-pointer border-[.1dvw] px-[.6dvw] py-[.2dvh] rounded-[.5dvw]">
                        Conferir
                        <ArrowUpRight size={"1dvw"} />
                </button>
            </span>

        </article>
    )
}

export default PostCard