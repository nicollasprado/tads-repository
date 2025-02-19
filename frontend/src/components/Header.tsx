import { Search } from "lucide-react"

function Header(){
    return (
        <header className="w-[100dvw] h-[8dvh] pl-[1dvw] bg-yellow-50 border-b-[.1dvw] border-sky-950 flex items-center justify-between">
            <h1 className="text-[2dvw] font-bold text-sky-600">TADS REPOSITORY</h1>

            <form action="GET" className="flex items-center">
                <input type="text" name="postSearch" placeholder="buscar postagens ou usuários" 
                       className="bg-yellow-50 border-y-[.1dvw] border-l-[.1dvw] w-[45dvw] h-[3.8dvh] p-[.3dvw] outline-0 rounded-l-[.5dvw] text-[.8dvw]" 
                />
                <button type="submit" className="cursor-pointer border-y-[.1dvw] border-r-[.1dvw] rounded-r-[.5dvw]">
                    <Search className="w-[2.4dvw] h-[3.7dvh]" />
                </button>
            </form>

            <nav className="w-[14dvw] px-[1dvw] py-[1dvh] flex items-center gap-[1.3dvw] bg-cyan-600 rounded-bl-[2dvw]">
                <a href="" className="text-[1dvw]">Nome do usuario</a>
                <a href="">
                    <img src="https://i.imgur.com/V4RclNb.png" alt="Imagem do usuario" className="w-[3dvw] h-[6dvh] rounded-full" />
                </a>
            </nav>
        </header>
    )
}

export default Header