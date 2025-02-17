import { FC, ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
    type?: "submit" | "reset";
    extraClassName?: string;
}

export const FormButton: FC<FormButtonProps> = ({ children, extraClassName, type }) => {
    return (
        <button type={type || "submit"} 
                className={`bg-blue-300 rounded-[.5dvw] w-[23dvw] h-[5dvh] text-[1.2dvw] flex items-center justify-center font-bold hover:bg-blue-400 cursor-pointer transition duration-200 ${extraClassName}`}>
            {children}
        </button>
    )
}