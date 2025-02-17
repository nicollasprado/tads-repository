import axios from "axios"
import { NavigateFunction } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export async function registerUserService(event: React.FormEvent, navigate: NavigateFunction) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    const body = {
        "username": data.get("username"),
        "email": data.get("email"),
        "password": data.get("password"),
    }

    const response = await axios.post(API_URL + "/user/register", body);

    if(response.status === 201){
        navigate("/register-sucess")
    }else{
        console.warn("error");
    }
}