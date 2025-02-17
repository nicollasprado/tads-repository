import { useNavigate } from "react-router-dom";
import RegisterInputList from "../components/RegisterInputList"
import { registerUserService } from "../services/registerUserService";
import { FormButton } from "../components/FormButton";

function Register(){
    const navigation = useNavigate();

    return (
        <main className="w-[100dvw] h-[100dvh] bg-radial from-slate-400 from-30% to-slate-800 flex items-center justify-center">

            {/* Mobile */}
            <div className="w-[100dvw] h-[100dvh] bg-sky-800 rounded-[2dvw] flex flex-col items-center gap-[20dvh]  lg:hidden">
                <h1 className="text-[10dvw] font-bold text-stone-300 p-[2dvw]">TADS REPOSITORY</h1>

                <form action="POST" onSubmit={(e) => registerUserService(e, navigation)} className="flex flex-col items-center gap-[10dvw]">
                    <RegisterInputList mobile={true} />
                    <button type="submit"
                            className="bg-blue-300 dark:bg-blue-300 rounded-[.5dvw] w-[55dvw] h-[10dvh] text-[4.5dvw] flex items-center justify-center font-bold hover:bg-blue-400 cursor-pointer transition duration-200"
                            >CADASTRAR
                    </button>
                </form>
            </div>



            {/* Desktop */}
            <div className="w-[60dvw] h-[70dvh] rounded-[2dvw] shadow-t-2xl drop-shadow-2xl     hidden lg:flex">
                <div className="w-[25dvw] h-[70dvh] bg-sky-600 rounded-l-[2dvw] flex flex-col items-center justify-around">
                    <section className="flex flex-col gap-[1.2dvw] items-center">
                        <h1 className="text-[2.2dvw] font-bold text-stone-300">TADS REPOSITORY</h1>
                        <p className="text-[1dvw] w-[15dvw] text-stone-300">A rede social dos estudantes de TADS do IFRN!</p>
                    </section>
                    <div className="flex flex-col items-center gap-[.5dvw]">
                        <h3 className="text-[1.3dvw] text-stone-300">Já possuo cadastro</h3>
                        <a href="/login" className="bg-white rounded-[1.2dvw] w-[17dvw] h-[5dvh] text-[1.2dvw] flex items-center justify-center font-bold">CONECTAR</a>
                    </div>
                </div>

                <div className="bg-sky-800 w-[35dvw] flex flex-col items-center justify-evenly gap-[5dvh] rounded-r-[2dvw]">
                    <h2 className="text-[2.2dvw] font-semibold text-stone-300">CRIAR CONTA</h2>
                    <form action="POST" onSubmit={(e) => registerUserService(e, navigation)} className="flex flex-col gap-[5dvh]">
                        <RegisterInputList />
                        <FormButton children={"CADASTRAR"} />
                    </form>
                </div>
            </div>

        </main>
    )
}

export default Register