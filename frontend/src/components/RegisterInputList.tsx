import { LockKeyhole, Mail, User } from "lucide-react";
import AuthInput from "./AuthInput";
import { FC } from "react";

interface RegisterInputListProps {
    mobile?: boolean;
}

const RegisterInputList: FC<RegisterInputListProps> = ({ mobile }) => {
    if(!mobile){
        return (
            <ul className="flex flex-col gap-[3dvh]">
                <li>
                    <AuthInput type="text" placeholder="nome de usuário" name={"username"} icon={<User className="inputIcon" />} />
                </li>
                <li>
                    <AuthInput type="email" placeholder="e-mail" name={"email"} icon={<Mail className="inputIcon" />} />
                </li>
                <li>
                    <AuthInput type="password" placeholder="senha" name={"password"} icon={<LockKeyhole className="inputIcon" />} />
                </li>
            </ul>
        )
    }

    return (
        <ul className="flex flex-col gap-[3dvh]">
            <li>
                <AuthInput type="text" placeholder="nome de usuário" name={"username"} icon={<User className="inputIconMobile" />} mobile={true} />
            </li>
            <li>
                <AuthInput type="email" placeholder="e-mail" name={"email"} icon={<Mail className="inputIconMobile" />} mobile={true} />                                
            </li>
            <li>
                <AuthInput type="password" placeholder="senha" name={"password"} icon={<LockKeyhole className="inputIconMobile" />} mobile={true} />                                
            </li>
        </ul>
    )
}

export default RegisterInputList