import { ChevronDown, ChevronUp } from "lucide-react";
import { FC } from "react"

interface ChangeVisibility{
    visibility: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePostHomepage: FC<ChangeVisibility> = ({visibility, setVisibility}) => {
    return (
        <section className={`bg-sky-950 p-[1dvw] rounded-b-[1dvw] flex ${visibility ? "flex-col" : "flex"}`}>
            <h2 className="text-[1dvw]">Criar nova publicação</h2>
            <div className={`flex-col items-center gap-[3dvh] ${visibility ? "flex" : "hidden"}`}>
                <form action="" className="flex flex-col gap-[.2dvh]">
                    <div className="flex gap-[.2dvh] w-[40dvw]">
                        <label className="text-[.8dvw]">
                            Titulo
                            <input type="text" name="title" placeholder="Titulo" className="w-[20dvw] h-[3dvh] p-[.1dvw] text-[.8dvw] bg-slate-600 border-[.1dvw] outline-0 border-white" />
                        </label>
                        <label className="text-[.8dvw]">
                            Descrição
                            <input type="text" name="description" placeholder="Breve descrição" className="w-[20dvw] h-[3dvh] p-[.1dvw] bg-slate-600 border-[.1dvw] outline-0 border-white" />
                        </label>
                    </div>

                    <label className="flex flex-col text-[.8dvw]">
                        Corpo da publicação
                        <textarea name="text" className="w-[40dvw] h-[8dvh] p-[.2dvw] text-[.8dvw] bg-slate-600 border-[.1dvw] outline-0 border-white resize-none" placeholder="Corpo da sua publicação" />
                    </label>
                </form>

                <button type="button" onClick={() => setVisibility(false)} className="cursor-pointer">
                    <ChevronUp size={"1.5dvw"} />
                </button>
            </div>

            <button type="button" onClick={() => setVisibility(true)} className={`cursor-pointer ${visibility ? "hidden" : "flex"}`}>
                <ChevronDown size={"1.5dvw"} />
            </button>
        </section>
    )
}

export default CreatePostHomepage