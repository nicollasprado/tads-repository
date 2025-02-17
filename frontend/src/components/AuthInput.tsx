import { FC, ReactNode } from "react";

interface AuthInputProps {
    type: string;
    placeholder: string;
    icon: ReactNode;
    name: "username" | "email" | "password";
    mobile?: boolean;
}

const AuthInput: FC<AuthInputProps> = ({ type, placeholder, icon, mobile, name }) => {
    return (
        <div>
            <label className="flex items-center">
                <span className={`bg-blue-300 text-black rounded-l-[.5dvw] ${mobile ? "p-[2dvw]" : ""} cursor-pointer`}>{icon}</span>
                <input type={type} placeholder={placeholder} name={name}
                    className={`bg-white text-center p-[.8dvw] ${mobile ? "w-[50dvw] h-[7dvh] focus:outline-1 text-[4.5dvw]" : "w-[20dvw] h-[4dvh] focus:outline-2 text-[1dvw]"} rounded-r-[1dvw] outline-blue-400`}
                />
            </label>
        </div>
    )
}

export default AuthInput