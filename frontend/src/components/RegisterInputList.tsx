import { LockKeyhole, Mail, User } from "lucide-react";
import LoginInput from "./RegisterInput";
import { FC } from "react";
import { RegisterUserData } from "../interface/RegisterUserData";

interface RegisterInputListProps {
    registerUserData: RegisterUserData;
    setRegisterUserData: React.Dispatch<React.SetStateAction<RegisterUserData>>;
    mobile?: boolean;
}

const RegisterInputList: FC<RegisterInputListProps> = ({ mobile, registerUserData, setRegisterUserData }) => {
    if(!mobile){
        return (
            <ul className="flex flex-col gap-[3dvh]">
                <li>
                    <LoginInput type="text" placeholder="nome de usuário" icon={<User className="inputIcon" />} setRegisterUserData={setRegisterUserData} field={"username"} value={registerUserData.username} />
                </li>
                <li>
                    <LoginInput type="email" placeholder="e-mail" icon={<Mail className="inputIcon" />} setRegisterUserData={setRegisterUserData} field={"email"} value={registerUserData.email} />
                </li>
                <li>
                    <LoginInput type="password" placeholder="senha" icon={<LockKeyhole className="inputIcon" />} setRegisterUserData={setRegisterUserData} field={"password"} />
                </li>
            </ul>
        )
    }

    return (
        <ul className="flex flex-col gap-[3dvh]">
            <li>
                <LoginInput type="text" placeholder="nome de usuário" icon={<User className="inputIconMobile" />} setRegisterUserData={setRegisterUserData} field={"username"} value={registerUserData.username} mobile={true} />
            </li>
            <li>
                <LoginInput type="email" placeholder="e-mail" icon={<Mail className="inputIconMobile" />} setRegisterUserData={setRegisterUserData} field={"email"} value={registerUserData.email} mobile={true} />                                
            </li>
            <li>
                <LoginInput type="password" placeholder="senha" icon={<LockKeyhole className="inputIconMobile" />} setRegisterUserData={setRegisterUserData} field={"password"} mobile={true} />                                
            </li>
        </ul>
    )
}

export default RegisterInputList