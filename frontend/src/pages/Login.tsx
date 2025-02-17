import { FormButton } from "../components/FormButton"
import { LoginInputList } from "../components/LoginInputList"

function Login(){
    return (
        <main className="w-[100dvw] h-[100dvh] bg-radial from-slate-400 from-30% to-slate-800 flex items-center justify-center">

            {/* MOBILE */}
            <section className="w-[100dvw] h-[100dvh] bg-sky-600 flex flex-col items-center justify-evenly  lg:hidden">
                <h1 className="text-[9dvw] font-semibold">BEM VINDO DE VOLTA!</h1>
                <form action="POST" className="flex flex-col h-[40dvh] justify-around items-center">
                    <LoginInputList mobile={true} />
                    <a href="" className="underline text-[4dvw]">esqueci minha senha</a>
                    <FormButton children={"CONECTAR"} extraClassName={"text-[6dvw] w-[63dvw]"} />
                    <a href="/register" className="bg-blue-700 hover:bg-blue-800 w-[63dvw] h-[5dvh] flex items-center justify-center rounded-[.5dvw] text-[4dvw]">criar conta</a>
                </form>
            </section>
            

            {/* DESKTOP */}
            <div className="w-[60dvw] h-[70dvh] bg-sky-600 rounded-[2dvw] shadow-t-2xl drop-shadow-2xl flex-col items-center text-center p-[1dvh]     hidden lg:flex">
                <section className="flex flex-col items-center h-[60dvh] justify-around">
                    <h1 className="text-[2dvw] font-semibold">BEM VINDO DE VOLTA!</h1>
                    <form action="POST" className="flex flex-col h-[28dvh] justify-around items-center">
                        <LoginInputList />
                        <a href="" className="underline text-[1.7dvh]">esqueci minha senha</a>
                        <FormButton children={"CONECTAR"} />
                        <a href="/register" className="bg-blue-700 hover:bg-blue-800 w-[23dvw] rounded-[.5dvw] text-[2dvh]">criar conta</a>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login