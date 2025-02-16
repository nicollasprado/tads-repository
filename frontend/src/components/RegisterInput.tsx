import { FC, ReactNode } from "react";
import { RegisterUserData } from "../interface/RegisterUserData";

interface RegisterInputProps {
    setRegisterUserData: React.Dispatch<React.SetStateAction<RegisterUserData>>;
    field: string;
    type: string;
    placeholder: string;
    icon: ReactNode;
    mobile?: boolean;
    value?: string;
}

const RegisterInput: FC<RegisterInputProps> = ({ type, placeholder, icon, mobile, value, setRegisterUserData, field}) => {
    const updateStorage = (value: string, field: string) => {
        setRegisterUserData(oldData => ({
            ...oldData,
            [field]: value
        }))
    }

    return (
        <div>
            <label className="flex items-center">
                <span className={`bg-blue-300 text-black rounded-l-[.5dvw] ${mobile ? "p-[2dvw]" : ""} cursor-pointer`}>{icon}</span>
                <input type={type} placeholder={placeholder} value={value} onChange={(event) => updateStorage(event.target.value, field)}
                    className={`bg-white text-center p-[.8dvw] ${mobile ? "w-[50dvw] h-[7dvh] focus:outline-1 text-[4.5dvw]" : "w-[20dvw] h-[4dvh] focus:outline-2 text-[1dvw]"} rounded-r-[1dvw] outline-blue-400`}
                />
            </label>
        </div>
    )
}

export default RegisterInput